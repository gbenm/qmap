---
sidebar_position: 2
---

# Creación de instancias QMAP

`qmapCreator` recibe opcionalmente un objeto que permite extender
las capacidades de la instancia.

```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator({
    extends: undefined,
    functions: undefined,
    schemas: undefined,
    queries: undefined,
    cache: undefined,
    mode: undefined
})
```

## Opciones

### `functions`
Aquí es dónde se declaran las funciones que tiene disponible la
query.

```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator({
    functions: {
        upperCase: (str) => str.toUpperCase()
    }
})
```
Luego se puede utilizar de la siguiente forma:
```javascript
const query = `{
    upperCase(name)
}`
```

:::caution Función no declarada
Si no se declara la función, será un error en runtime
para su aplicación (a menos que esté declarada en algún padre
al hacer uso de [extends](#extends))
:::

### `schemas`
Al tener un servicio que cuenta con varios niveles de
autorización se puede incurrir en tener condicionales para
seleccionar que datos se deben incluir según el rol, lo que
significa que si se agrega un nuevo rol habrá que cambiar
el código interno del endpoint, **qmap** tiene como propósito
no enfocarse en que información tiene que poder consultar cada
usuario, sino en que es lo que se quiere, por lo que los
condicionales pueden cambiar su enfoque de **"el rol tiene
acceso a"**, a **"se van incluir en lo consultado?"**,
la librería se encarga de filtrar la información según lo
declarado (véase [función includes](./instance/#includes)).

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

:::info `{}`
Es importante no olvidar las llaves que envuelven los `schemas`
:::

En este ejemplo el administrador puede consultar
toda la información en **transaction**, **product** y **provider**
sin embargo, el cliente puede ver únicamente **transaction** y
**product**, además que se le restringe que información puede consultar,
**transaction** se limita a **description, amount y date**, y del **product**
únicamente a **name**.

Se puede seleccionar el `schema` al compilar la query:
```javascript
qmap(query, {
    schema: "admin"
})
```

Si tiene trozos repetidos puede reutilizarlos usando `spread`:

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

En lo anterior el cliente tiene acceso total a **transaction** y
**product**, como el administrador también los tiene simplemente
se puede utilizar el operador `spread` para copiar lo que ya se definió
antes (debe estar declarado antes). Algo que por
el momento no se ha mencionado, pero es importante, es que
el `spread` funciona únicamente en el scope de la query (el string)
por lo que aunque se use `extends` no podrá utilizarlo con los
`schemas` o `queries` del qmap padre.

### `queries`
Permite predefinir manipulaciones del JSON que pueden ser modificadas
por medio de la query que se manda a ejecutar.

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

:::info `{}`
Es importante no olvidar las llaves que envuelven las `queries`
:::

Las queries compiladas con la función `qmap` podrá hacer
uso del nombre `compact_transaction` para referirse a dicha
query.

```javascript
qmap("compact_transaction")
// es equivalente
qmap(`{
    description: transaction.description,
    amount: transaction.amount,
}`)
```

Para aplicar transformaciones sobre la query:
```javascript
qmap(`compact_transaction {
    description
}`)
```

### `extends`
Permite reutilizar `functions`, `queries` y `schemas` de
otras instancias ya creadas. Lo definido en la instancia
actual, sobreescribe el comportamiento de las anteriores
(únicamente para la nueva instacia).

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

const qmap = qmapCreator({
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

Por lo que lo siguiente es válido:
```javascript
qmap(`{
    concat(name, id)
}`)
```

:::note
`qmapCreator` compila la query de `schemas` y `queries`
al ejecutarse (es decir que la instancia devuelta para
ejecutar queries ya no las vuelve a compilar)
por lo que dejar la llamada a `qmapCreator` en
dónde no se vuelva a ejecutar será una buena elección.
:::

### `mode`
Se refiere a como debe operar la instancia y sus hijos (si no es sobreescrito)
- `"only-cache"` al usar `apply` si el valor no existe en el cache, se lanzará
una excepción
- `"normal"` **(por defecto)** utiliza el cache si el valor se encuentra, en otro
 caso compila y guarda, si existe un cache, de otro modo funciona al igual que `compiler`
- `"compiler"` siempre compila la query

### `cache`
Recibe el cache (de tipo `CacheStore`) que se va utilizar en la instancia actual y sus
hijos (si no es sobreescrito) véase [compiler cache](./cache)
