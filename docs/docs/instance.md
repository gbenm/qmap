---
sidebar_position: 3
---

# La instancia
Es devuelta por `qmapCreator` y se encarga de compilar la
query y devolver funciones de ayuda.

## Args
```javascript
function qmap(query, options) {
    //
}
```
### `query`
Es el string que representa su query, también es posible pasar
`null` y `undefined` que representan que no se hará ninguna
transformación (`""`, `"{}"` también representan lo mismo)

### `options`
Es un objeto opcional que permite definir el `schema` y las `variables` por default
(ambos pueden ser sobreescritos), **schema** le hace saber a la función cuál de los
[schemas](./create-instance#schemas) debe utilizar para filtrar la información
y **variables** sirven para dar valores a las variables en las [funciones](./queries/functions).

:::caution Importante
Si sobreescribe el `schema` en la función `apply` debe sobreescribirlo en la función
`includes`, ya que sino van a diferir en comportamiento.
:::

## Al ejecutar
```javascript
const qmap = qmapCreator()

const { errors, apply, includes } = qmap(`{
    [ upperCase(products.name) ],
    transaction.providers.id,
    take([ currency([ add(ids, @offset) ]) ], @quantity)
}`, {
  variables: {
    quantity: 1,
    offset: 300,
  }
})
```

La ejecución de la función de compilación devuelve
un objeto que contiene: `errors`, `apply` e `includes`.

### `errors`
Es un array con los errores al compilar la query, es `undefined` si no hay errores.
```javascript
import { qmapCreator } from "@qmap/engine"
const qmap = qmapCreator()
const { errors } = qmap("{ id, name }")
```
### `includes`
Es una función que permite comprobar si el `path`
(dónde está alojado un objeto dentro del JSON)
se debe agregar. Respeta a los `schemas` y a las
`queries` de `qmapCreator`, por lo que no importa si
está en la query que se compiló con la función `qmap`,
si el schema o la query no lo tienen,
el resultado será `false`. Existe un segundo
parámetro (opcional) que sirve para sobreescribir
el schema, si en `apply` declara nuevamente el
`schema` asegurese de sobreescribirlo también en
`includes`.

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
includes(["product", "provider", "id"]) // false
```

:::info
`includes` utiliza un índice que se genera en compilación,
si se tiene `schemas` o `queries` se realiza la búsqueda
primero en el indice de `schemas`, luego en el de `queries`
y por último sobre la query actual.
:::

:::note
La intención de esta función es que se puedan realizar
operaciones de forma condicional, por ejemplo agregar
un join si es necesario (ayuda a cambiar el enfoque
en el caso de tener diferentes niveles de acceso a la información).
:::

### `apply`
Es la función que trasforma el JSON, recibe como
primer argumento el JSON objetivo, y como segundo (opcional)
las opciones, que es el objeto dónde se pueden agregar las
variables, sobreescribir el `schema` (cuidado con
sobreescribir el schema, asegúrese de hacerlo en ambos, `apply` e `includes`)
e indicar en dónde se debe aplicar las transformaciones.

:::note
Las variables pueden tener cualquier tipo de dato.
:::

```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator({
  functions: {
    concat: (...strs) => strs.join("")
  },
  schemas: `{
    user {
      name
    }
  }`
})

const { apply } = qmap(`{
  id,
  name,
  label: concat(id, @separator, name)
}`, {
  variables: {
    separator: "@"
  }
})

const input = {
    id: 1,
    name: "test",
    other: "other"
}

const result = apply(input)
// result is { id: 1, name: 'test', label: '1@test' }

const otherResult = apply(input, {
  schema: "user",
  variables: {
    separator: "-"
  }
})
// result is { id: null, name: 'test', label: '-test' }
```

#### `over` option
Es un arreglo de strings que indican el path para
llegar al lugar dónde se deben aplicar las transformaciones,
por ejemplo `["request", "data"]` se aplica a `input.request.data`

```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator()

const { apply } = qmap(`{
  id,
  name,
}`)

const input = {
  status: "success",
  data: {
    id: 1,
    name: "test",
    other: "other"
  }
}

const result = apply(input, { over: ["data"] })
// result is { data: { id: 1, name: 'test' } }

```
