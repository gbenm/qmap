---
sidebar_position: 3
---

# Index select

## Notación
En vez de colocar `{}` para envolver la selección se usa `#{}`.
```javascript
const query = `{
    product #{
        id, name
    },
    product.provider #{
        id, name
    },
}`
```

## Funcionamiento
No ejecuta selección sobre el campo, es decir que es equivalente
a no listar lo que se necesita, sin embargo, si modifica
el índice.

```javascript
const query1 = `{
    product #{
        id, name
    }
}`

const query2 = `{
    product
}`

const query3 = `{
    product {
        id, name
    }
}`
```

Si se ejecuta `apply`, el resultado de `query1` y `query2` es
exactamente el mismo, mientras que si se usa `includes` la `query1`
dará los mismos resultados que la `query3`.

## Funciona con:
`access` y `select` utilizando la misma notación

## Ejemplo
### Datos
```javascript
const input = {
    products: [
        { id: 1, name: "product 1" },
        { id: 2, name: "product 2" },
        { id: 3, name: "product 3" }
    ]
}
```
### Query
```javascript
import { qmapCreator } from "@qmap/engine"

const qmap = qmapCreator()

const executors = qmap(`{
    products #{
        name
    }
}`)
```

### Resultado
```javascript
const result = executors.apply(input)
// result == input
```

### El índice
El cambio se obtiene en esta parte, consultar si se
encuentra name, será verdadero, mientras que cualquier otro
campo dará un resultado `false`.
```javascript
executors.includes(["products", "name"]) // true
executors.includes(["products", "id"]) // false
executors.includes(["products", "any"]) // false
```
