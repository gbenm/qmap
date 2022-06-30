---
sidebar_position: 3
---

# Funciones
Debe declararlas en el `qmapCreator`, luego de esto
puede utilizar el nombre de la función dentro de la query,
debe ser un identificador válido, no es permitido utilizar
`""` para el nombre de las funciones.

## En general

-   El nombre que toma la key en el resultado, es la concatenación de los
    argumentos.

-   Las funciones se aplican sobre los valores en el JSON de entrada
    (no sobre los valores incluidos en el resultado).
    ```javascript
    const query = `{
        toString(id)
    }`
    ```

-   Se pueden componer
    ```javascript
    const query = `{
        upperCase(fullname(first_name, last_name)),
    }`
    ```
-   Pueden utilizar variables (no es permitido utilizar `""` para el nombre
    de variables) estas se mandan através de `qmap` o `apply`
    ```typescript
    const query = `{
        take(members, @quantity)
    }`

    qmap(query, {
        variables: {
            quantity: 5
        }
    })
    ```

:::info
Las variables se declaran con un `@` al inicio, seguido de un identificador.
**No** puede usar comillas `""`
:::

-   Puede utilizar números, strings y booleans utilizando la notación `@{*}`
    (únicamente es válido para las funciones).
    ```typescript
    const query = `{
        take(members, @{3}),
        parents: filterBy(members, @{"isParent"}, @{true})
    }`

    qmap(query)
    ```

-   Pueden usarse dentro de la selección, sin embargo esto limita la información
    que puede utilizar a la que existe dentro de la clave en el JSON
    de entrada. También es permitido utilizar **selección** y
    **acceso** como argumentos.
    ```javascript
    const query = `{
        product {
            upperCase(provider.name)
        },
        transaction {
            calcTotal(products {
                price
            })
        }
    }`
    ```

-   Queda en responsabilidad del desarrollador controlar
    errores en las funciones, ya que la función `apply` podría
    fallar, también se debe tener en cuenta que los argumentos
    pueden ser `null`.

-   No se transforma la salida de la función, es decir que
    puede devolver `undefined` si lo desea.

-   Las funciones deben ser síncronas, pero podría ser útil
    posteriormente agregar asíncronas.


## Retorno de la función
Se puede modificar el retorno de una función. Puede ser
de útilidad cuándo tiene un enfoque de optimización o
estético.

:::caution
Las modificaciones al retorno de la función no
afecta el [índice](../instance#includes).
:::

### Optimización
Al ejecutar un select sobre un array este se aplica por
cada elemento, por ejemplo si la función tiene el propósito
de reducir la cantidad de elementos

```javascript
function execute(query) {
    const { apply } = qmap(query)

    apply(input)
}

execute(`{
    take(products { name }, @{10})
}`) // 214.7 ms en promedio (300,000 items)

// vs

execute(`{
    take(products, @{10}) { name }
}`) // 0.1 ms en promedio (300,000 items)
```

Esto sucede porque no es lo mismo seleccionar el "name" de 300,000
items y tomar 10 a tomar 10 de 300,000 y seleccionar sólo el "name".

### Estético
```javascript
const query = `{
    take(products { name, provider { name } }, @{10})
}`

// vs

const query2 = `{
    take(products, @{10}) {
        name,
        provider {
            name
        }
    }
}`
```

### Forzar modificación del índice
El problema radica en que las operaciones sobre el retorno de
la función no afectan el [índice](../instance#includes) (el que le
permite saber si se debe incluir la información), por lo que resulta
incluyendo todo.

Se puede activar la modificación del índice al anteponer `#` en las
llaves (esto permite modificar el índice sobre el primer argumento
que **debe ser** una selección o un acceso)

```javascript
const query = `{
    take(products, @{2}) #{
        name
    }
}`
```

Sin embargo lo anterior sigue incluyendo todo debido a que `products` no tiene
cuerpo. El truco consiste en utilizar [exclude](./exclude) que aunque el cuerpo
no incluya el objetivo a eliminar, este servirá para eliminarlo del índice.

```javascript
const query = `{
    take(products, @{2}) #{
        !provider
        name
    }
}`
```
:::note
Esto únicamente tiene sentido si se va utilizar el índice de esta selección para
realizar una operación condicional, por ejemplo `provider` podría significar
un join con la tabla de Proveedores si es que se usa una RDBMS
:::

#### Sobre otro índice
Se puede colocar una ruta relativa (en el campo actual) después del `#` y antes de `{}`
para especificar en dónde van las modificaciones del índice. De forma explicita quedaría:

```javascript
const query = `{
    take(products, @{2}) #products {
        !provider
        name
    }
}`
```

Por ejemplo si el índice a modificar es sobre el segundo argumento:

```javascript
const query = `{
    foo(arg1, other.place) #other.place {
        !user,
        name
    }
}`
```

Lo anterior agregaría al índice del segundo argumento el `exclude` del
"user"


## Funciones map
Por defecto las funciones toman el objeto, es decir
que se ejecutaría una sola vez y como argumento tendría el array,
para ejecutar la función por cada elemento debe llamar
su función de esta manera:

```javascript
const query = `{
    upperCase(@[products.name])
}`

const input = {
  products: [
    { name: "pencil" },
    { name: "paper" },
  ],
}

const result = {
  products_name: [ 'PENCIL', 'PAPER' ]
}
```

Al encerrar el argumento que es el array en `@[]` se indica
que se debe aplicar a cada elemento (sólo puede haber uno de estos).

:::info
Los demás argumentos deben ser valores globales, es decir,
que estén en el scope de la clave en el JSON de entrada
o bien ser variables. Aunque los demás valores sean
arreglos serán tratados como argumentos únicos
:::

1. Puede utilizar la composición (se pueden componer funciones
por elemento y normales):

```javascript
const query = `{
    take(currency(@[ add(@[ids], offset) ]), @quantity)
}`

const input = {
    offset: 100,
    ids: [1, 2, 3, 4, 5],
}

const result = {
  ids_offset_quantity: [ '$101.00', '$102.00', '$103.00' ]
}
```

Alternativamente se puede encerrar la función en `[]` para indicar
que es una función map.

```javascript
const query = `{
    [ upperCase(products.name) ]
}`

const input = {
  products: [
    { name: "pencil" },
    { name: "paper" },
  ],
}

const result = {
  products_name: [ 'PENCIL', 'PAPER' ]
}
```

:::info
Con la notación `[]` se asume que el primer argumento es
el array.
:::
