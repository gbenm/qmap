# QMap

Es un motor para manipulación JSON.

> Este paquete está bajo construcción, por lo que realizar
> más tests en `src/engine/engine.test.ts` es de gran
> ayuda para verificar que funcionen correctamente las
> capacidades actuales.

## Contenido
- [Motivación](#motivación)
- [Progreso](#progreso)
- [Capacidades](#capacidades)
- [Uso](#uso)
    - [Crear instancia qmap](#crear-instancia-de-qmap)
    - [Consultas](#consultas)
        - [Selección](#selección)
        - [Acceso](#acceso)
        - [Renombrar](#renombrar)
        - [Agregar todo](#agregar-todo)
        - [Excluir](#excluir)
        - [Funciones](#funciones)
            - [Por item en el array](#por-item-en-el-array)
        - [Spread (no provoca cambios en el JSON)](#spread)
    - [Ejecutar la query](#ejecutar-la-query)

## Motivación
JSON es una de las formas más ampliamente utilizadas para
intercambiar información mediante HTTP, una característica
con la que se debe lidiar es que información se debe mandar
como respuesta, las aplicaciones consumen la información
de muchas maneras, por lo que a veces no es necesaria
toda la información que nos pueda entregar un endpoint,
por lo que para llevar esto, simplemente se puede ignorar
y siempre obtener toda la información (en caso de ser utilizadas
con datos móviles es un derroche), o tal vez crear filtros con
los que se pueda mermar el problema, la cuestión es que esto
provoca tener que manter más código.

QMap permite por medio de una declaración de queries manipular
el contenido del JSON, con lo que puede hacer bastante flexible
lo que consume de un endpoint en específico (la forma en
que envía la query depende del desarrollador, por ejemplo,
para un endpoint get simplemente puede ir como un query string,
además que si es null **qmap** devuelve el mismo objeto), además
que también agregar el poder de restringir y disminuir el tamaño
de las queries. El lado de la restricción se basa en la declaración
de `schemas` (opcionales) que indican un límite sobre lo que se
puede extraer del JSON, por ejemplo al indicarle que use el
schema **user** la información disponible sería diferente a la
que si usara **admin** (los nombres los define el desarrollador,
véase [schemas](#utilizando-schemas)), esto da la flexibilidad
de cambiar de un enfoque de "se incluyen los datos
porque el rol así lo define" a un "la consulta solicita
la información?" y ya es la librería la que se encarga
de filtrar la información que puede o no consultar. Por otra parte
la disminución del tamaño es consecuencia de que en el lado del
servidor se pueden declarar queries, el cliente puede realizar
una consulta sobre una query ya definida y sólo modificar
lo que le interese (véase [queries](#utilizando-queries)).

Otro problema puede nacer al consumir APIs de terceros, por ejemplo,
si esta devuelve:
```json
{
  "id": "1",
  "price": 2.3,
  "description": "..."
}
```
pero el sistema únicamente necesita el precio para poderlo
mostrar, puede de una forma declarativa transformarlo
```javascript
const query = `{ currency(price) }`

const result = {
  "price": "$2.30"
}
```

> Puede consultar [Uso](#uso) para más información.

Cabe resaltar que aunque se hable en la documentación con
este enfoque puede utilizar la librería con otro propósito
siempre y cuándo quiera modificar la información de un JSON.

## Progreso
- [x] Motor principal
- [ ] Motor modo cliente (en este se ejecuta parcialmente y se crear
    una query minificada)
- [ ] Aplicar selección al resultado de la función

## Capacidades
- Limitación por medio de `schemas`
- Predefinición de queries, por medio de `queries`
- Selección de campos
- Renombrar campos
- Reutilización de queries
- Accesos a campos internos (para aplanarlos o utilizarlos
    en una función)
- Funciones con o sin variables
- La capacidades de aplicar array queries
    - selección
    - acceso
    - se puede aplicar las funciones a los elementos
        en vez del array.

## Uso
### Crear instancia de QMap
La forma más simple es simplemente llamando a `qmapCreator()`,
sin embargo se pueden realizar más cosas.
```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator()
```

#### Utilizando `functions`
Para poder utilizar funciones dentro de la query se deben
agregar al objeto que recibe `qmapCreator`:
```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator({
  functions: {
    upperCase(str) {
      return str.toUpperCase()
    }
  }
})
```
Con esto ya puede ser utilizado `upperCase` dentro la petición

#### Utilizando `schemas`
Al tener un servicio que cuenta con varios niveles de
autorización se puede incurrir en tener condicionales para
seleccionar que datos se deben incluir según el rol, lo que
significa que si se agrega un nuevo rol habrá que cambiar
el código interno del endpoint, **qmap** tiene como propósito
no enfocarse en que información tiene que poder consultar cada
usuario, sino en que es lo que se quiere, por lo que los
condicionales pueden cambiar su enfoque de un "el rol tiene
acceso a", a un "se van incluir en lo consultado?", y el problema
de que se puede o no consultar ya es responsabilidad de la librería
(véase [función includes](#includes-function)).

```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator({
  schemas: `{
    admin {
      transaction, product, provider
    },
    client {
      transaction {
        description, amount, date
      },
      product {
        name
      }
    }
  }`
})
```
En este ejemplo el administrador tiene la potestad de consultar
toda la información en **trasaction**, **product** y **provider**
sin embargo, el cliente puede ver únicamente la transacción y el
producto, además que se le restringe que información puede ver,
por ejemplo no puede ver los `id`s, precio del producto, u otra
información que puedan contener.

También existe la opción de reutilizar schemas si no se es
muy estricto, por ejemplo:

```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator({
  schemas: `{
    client {
      transaction,
      product
    },
    admin {
      ...client,
      provider
    }
  }`
})
```

En lo anterior el cliente tiene acceso total a la transacción y
al product, y como el administrador también los tiene simplemente
se utilizar el operado `spread` para copiar lo que ya se definió
antes (el orden de la declaración importa), algo que por
el momento no se ha mencionado, pero es importante, es que
el `spread` funciona únicamente en el scope de la query (el string)
por lo que aunque se use `extends` no podrá utilizar las
del padre.

#### Utilizando `queries`
Con el motivo de minizar lo que se envía puede dejar queries
en el lado de su servidor y realizar consultas sobre estas:

```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator({
  queries: `{
    compact_transaction {
      description: transaction.description,
      amount: transaction.amount,
    }
  }`
})
```

Luego podrá utilizar el nombre que le asignó para realizar una
consulta sobre el mismo, esto se explicará más adelante.

#### Utilizando `extends`
Con el fin de poder modularizar sus instancias puede
repartirlas en pedazos utilizando esta propiedad, puede
ayudarlo a no definir muchas veces las funciones o
en dispersar sus **queries** o **schemas**.

```javascript
import { qmapCreator } from "@qmap/engine"

const qmapCommon = qmapCreator({
  functions: {
    concat(...strs) {
      return strs.join("")
    },
    take(list, n) {
      return list.slice(0, n)
    },
    upperCase(str) {
      return str.toUpperCase()
    }
  }
})

const qmapProducts = qmapCreator({
  extends: qmapCommon,
  schemas: `{
    admin {
      ... // puede consultar todo
      // también podría no definirlo
    },,
    client {
      name,
      price
    }
  }`
})
```

> Cómo una nota final, `qmapCreator` compila el lenguaje
> consulta para `schemas` y `queries` al ser ejecutado,
> por lo que podría serle de utilizar dejar estas fuera
> de su endpoint para no tener que realizar la misma
> compilación varias veces

### Consultas
Para poder agregarlas necesita tener una idea de como
funciona la plantilla general:

```javascript
const query = "NOMBRE_QUERY { }"
```

`NOMBRE_QUERY` es opcional y debería ser un nombre declarado
en la sección `queries` de `qmapCreator` por decirlo de una
manera es la consulta padre que filtra primero la información.

Entre consultar válidas están `null`, `undefined`, `""`, `"{}"`,
que representan que no se hará ninguna modificación a la información
del JSON.

> Importante: la llaves son importantes, y sólo puede estar
> un único nombre fuera de ellas (que representan la consulta padre).

#### Selección
```javascript
const query = `{
    id,
    description,
    provider {
        name
    },
    "un campo extra"
}`
```
Esta consiste en declarar que es lo que se quiere recibir,
si algo no existe en el objeto tendrá valor `null`. Puede
agregar el nivel de anidación que le apetezca. Observaciones:
- Si no hay una selección sobre un campo se trae toda la
información.
- No se permite dejar las llaves en blanco, es decir `provider {}`
es considerado un error.
- Si es un arreglo la consulta se aplica sobre cada objeto
- Para poder igual a las claves de JSON también se puede colocar
cualquier texto dentro de `""` para expecificar cualquier otra cosa,
puede ir sin comillas cualquier combinación que haga match con
`[a-zA-Z0-9_$]+`.

### Acceso
Permite aplanar el JSON, también puede ser útil para usarse
con las funciones.
```javascript
const query = `{
    product.name,
    transaction.provider {
        id, name
    }
}`
// el resultado será
const result = {
    product_name: "...",
    transaction_provider: {
        id: 2,
        name: "test"
    }
}
```
Esta es la forma más sencilla, observaciones:
- admite cualquier nivel de acceso
- el nombre por defecto es la concatenación
- es válido usar `""` para denotar nombres
- Funciona en arrays, e.g.
```javascript
const input = {
    products: [
        { name: "pencil" },
        { name: "paper" },
    ],
    transaction: {
        providers: [
            { id: 1, name: "test" },
        ]
    }
}

const query = `{
    products.name,
    transaction.providers.id
}`

// el resultado será
const result = {
    products_name: [ 'pencil', 'paper' ],
    transaction_providers_id: [ 1 ]
}
```
Lo cuál significa que no importa cuál sea el arreglo, tenga
cuidado para no resultar con listas de listas si eso no
era lo que quería.

### Renombrar
```javascript
const query = `{
    alias: "my query" {
        id, name
    },
    other: other."field in".object
}`
```

### Agregar todo
```javascript
const query = `{
    ...
}`
```
Por si sólo no se ve muy útil, ya que este caso dejar vacía
la consulta es equivalente, pero puede ser de utilidad cuándo
se quiere sólo modificar pequeñas cosas.

### Excluir
Cuándo se le haga más fácil marcar que es lo que no quiere, o
por ejemplo eliminar un campo renombrado, puede utilizar lo
siguiente:

```javascript
const query = `{
    ...,
    !serial,
    id: serial
}`
```
Al preceder un nombre con un signo de admiración `!name`, se
elimina la clave que haya sido agregada anteriormente. En el caso
anterior es necesario borrar serial, porque aunque se esté
renombrando, el operador `...` ha incluído todas las claves
permitidas (entre ellas **serial**).
> Tenga cuidado!, si agrega un **exclude** después de una consulta
> que tenga el nombre del que va eliminar, este será borrado.
> No es un operador que esté restringido a `...`

### Funciones
Debe declararlas en el `qmapCreator`, luego de esto
puede utilizar el nombre de la función, debe ser un identificador
válido, no es permitido utilizar `""` para el nombre de las
funciones.

0. El nombre que toma la clave es la concatenación de los
argumentos.
1. Las funciones se aplican sobre claves que estén en ese
contexto.
```javascript
const query = `{
    toString(id)
}`
```
2. Se pueden componer
```javascript
const query = `{
    upperCase(fullname(first_name, last_name)),
}`
```
3. Pueden utilizar variables (los primitivos no se permiten,
si necesita mandar una información externa, utilice variables,
tampoco es permitido utilizar `""` para el nombre de variables) estas
se mandan através de `qmap` o `apply` (más adelante)

```javascript
const query = `{
    take(family, @quantity)
}`
```

> Las variables se declaran con un `@` al inicio seguido de un nombre
> válida a usarse sin comillas

4. Se pueden declarar dentro de las llaves de otra query,
además que también es permitido utilizar **selección** y
**acceso** dentro de las lista de argumentos

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

7. Queda en responsabilidad del desarrollador controlar
errores en las funciones, ya que la función `apply` podría
fallar, también se debe tener en cuenta que los argumentos
pueden ser null.

8. Las funciones deben ser síncronas, pero podría ser útil
posteriormente agregar asíncronas.


#### Por item en el array
Por defecto las funciones toman el objeto completo, por lo que
si se aplica a un array este tomaría como valor, este y no sus
items, para cambiar esto, debe utilizar lo siguiente:

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

En lo anterior se encerró la función en `[]` para indicar
que esta debe ser aplicar a los items no al array.

1. puede utilizar la concatenación de igual forma, por
lo que tiene la capacidad de hacer cosas como:

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
> Con la notación `[]` se asume que el primer argumento es
> array, los demás deben ser valores globales, es decir,
> que estén en el scope o bien sean variables, y aunque el segundo
> o demás sean un array, la función los recibirá de ese modo.

### Spread
Este operador no provoca un cambio en el JSON, sólo tiene
el objetivo de reutilizar consultas.
```javascript
const query = `{
    user {
        id,
        name,
        account {
            id
        }
    },
    professor {
        ...user,
        classes
    },
    account {
        ...user.account,
    }
}`
```
Sería lo mismo que tener
```javascript
const query = `{
    user {
        id,
        name,
        account {
            id
        }
    },
    professor {
        id,
        name,
        account {
            id
        },
        classes
    },
    account {
        id
    }
}`
```

Se copia según el scope, por lo que en el caso de que
exista un padre cercano con la dirección que se especificó
y otra al inicio de la query, se copiará la más cercana,
para especificar explicitamente que se parta desde la raíz
utilice `&`
```javascript
const query = `{
    target { name },
    pub {
        target {
            other
        },
        person {
            ...&target
        }
    }
}`
```
Lo anterior es equivalente a:
```javascript
const query = `{
    target { name },
    pub {
        target {
            other
        },
        person {
            name
        }
    }
}`
```

### Ejecutar la query
Al ejecutar una query puede hacer uso de 2 funciones y un array:

1. `errors` es un array con los errores al compilar la query, es
`undefined` si no hay errores.
```javascript
import { qmapCreator } from "@qmap/engine"
const qmap = qmapCreator()
const { errors } = qmap("{ id, name }")
```
2. `includes` esta función le permite saber si la consulta
determinó que se debe agregar lo que pregunta, se apega
a los `schemas` y a las `queries` de `qmapCreator`, por lo
que no importa si está en la query que se le pasó a la
función `qmap`, si el schema o la query no lo tienen
el resultado será `false`.
```javascript
import { qmapCreator } from "@qmap/engine"
const qmap = qmapCreator()
const { includes } = qmap(`{
    product {
        provider {
            account
        }
    }
}`)

// se necesita un array que representa el camino hacia lo
// que se pregunta
includes(["product"]) // true
includes(["product", "provider"]) // true
includes(["product", "provider", "account"]) // true
```
> `includes` utiliza un índice que se genera en compilación,
> si se tiene `schemas` o `queries` se realiza la búsqueda
> en los tres índices.

> La intención de esta función es que se puedan realizar
> operaciones de forma condicional, por ejemplo agregar
> un join si es necesario (ayuda a cambiar el enfoque
> en el caso de los roles)

3. `apply` es la función que trasforma el JSON, recibe como
primer argumento el JSON objetivo, y como segundo (no requerido)
las opciones, que es el objeto dónde se pueden agregar las
variables y el `schema` que se va utilizar (las variables, pueden
ser cualquier tipo soportado por javascript).

```javascript
import { qmapCreator } from "@qmap/engine"
const qmap = qmapCreator()

const { apply } = qmap("{ id, name }")

const response = {
    id: 1,
    name: "test",
    other: "other"
}

const result = apply(response)
// result == { id: 1, name: "test" }

const otherResult = apply(response, {
  schema: "admin",
  variables: {
    quantity: 3
  }
})
```

El objeto de opciones también puede ser pasado a la función `qmap`,
pero `apply` tiene prioridad, lo que significa que si cambia el
**schema** o las **variables**, son los valores en `apply`
los que permanecen, pero esto le da la opción de agregar variables
`default`.

