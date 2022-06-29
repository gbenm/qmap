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
-   Pueden utilizar variables (los primitivos no se permiten,
    si necesita mandar información externa, utilice variables,
    tampoco es permitido utilizar `""` para el nombre de variables) estas
    se mandan através de `qmap` o `apply`
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


## Funciones map
Por defecto las funciones toman el objeto, es decir
que se ejecutaría una sola vez y como argumento tendría el array,
para ejecutar la función por cada elemento debe llamar
su función de esta manera:

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

Al encerrar la función en corchetes `[]` se indica
que se debe aplicar a cada elemento en el arreglo.

1. Puede utilizar la composición (se pueden componer funciones
por elemento y normales):

```javascript
const query = `{
    take([ currency([ add(ids, offset) ]) ], @quantity)
}`

const input = {
    offset: 100,
    ids: [1, 2, 3, 4, 5],
}

const result = {
  ids_offset_quantity: [ '$101.00', '$102.00', '$103.00' ]
}
```

:::info
Con la notación `[]` se asume que el primer argumento es
array, los demás deben ser valores globales, es decir,
que estén en el scope de la clave en el JSON de entrada
o bien ser variables. Aunque los demás valores sean
arreglos serán tratados como argumentos únicos.
:::
