---
sidebar_position: 4
---

# Compiler Cache

## Uso
### Simple
La forma simple para utilizar un cache es tener
una instancia de `CacheStore`, esta debe ser capaz
de funcionar con `string` tanto como clave interna y
externa, de otra manera necesitará un `CachePolicy`

```javascript
import { qmapCreator } from "@qmap/engine"
import { InMemoryCache } from "mycachelib" // paquete ficticio

const qmap = qmapCreator({
    cache: new InMemoryCache()
})
```

Véase [CacheStore qué es?](#cachestore)

### Utilizando `CachePolicy`
- Véase [CacheStore qué es?](#cachestore)
- Véase [CachePolicy qué es?](#cachepolicy)

```javascript
import { qmapCreator } from "@qmap/engine"
import { InMemoryCache, FifoCache, HashCache } from "mycachelib" // paquete ficticio

const cache = new InMemoryCache()
    .accept(new HashCache().pipe(new FifoCache(100)))

const qmap = qmapCreator({
    cache
})
```

En este caso la política principal es el `HashCache` y será
el que recibirá la query pura, luego el **hash de la query**
llegará al `FifoCache` que tiene el rol de sólo mantener
**100** queries y utilizará `FIFO` como política de reemplazo,
por último el valor llegará al `InMemoryCache` que es el
`CacheStore` y este se encargará de tener las queries en
memoria.

- Implentación de [HashCache](https://github.com/gbenm/qmap/blob/main/src/cache/__testing__/HashCache.ts)
- Implentación de [FifoCache](https://github.com/gbenm/qmap/blob/main/src/cache/__testing__/FIFOCache.ts)
- Implentación de [InMemoryCache](https://github.com/gbenm/qmap/blob/main/src/cache/__testing__/InMemoryCache.ts)

### HashCache example
- véase [HashCache](https://github.com/gbenm/qmap/blob/main/src/cache/__testing__/HashCache.ts)

Si por ejemplo se quiere evitar enviar las queries por medio de **query strings** o
minimizar el tamaño se podría optar por tener una implementación
similar a lo siguiente (este ejemplo simula un API).

```typescript
// paquetes ficticios
import { qmap } from "mypackage"
import { HashCache } from "mycachelib"
import { getProducts } from "myusecaselib"

function getHashCache() {
    const cache = qmap.cache

    if (!cache) {
        throw new Error("No cache!")
    }

    return cache.getMainPolicy<HashCache>()
}

app.get("/query/:hash", (req, res) => {
    const hashCache = getHashCache()

    res.json({
        incache: hashCache.hasKey(req.params.hash)
    })
}) // preguntar si el hash está registrado

app.post("/query", (req, res) => {
    const hashCache = getHashCache()

    const query = req.body.query
    const hash = hashCache.computeAndSave(query, { query })

    res.json({
        hash
    })
}) // registrar la query

app.get("/products", (req, res) => {
    const hash = req.query.hash

    // fallará si no tiene el hash en cache
    const { apply } = qmap(hash, { mode: "only-cache" })

    const products = getProducts()

    res.json(apply(
        { status: "success", data: { products } },
        { over: ["data"] }
    ))
})
```

## CacheStore
### Qué es?
Este componente debe encargarse de guardar la información,
es recomendable no agregar comportamientos específicos, ya
que esto se puede realizar mediante `CachePolicy`.

- Un ejemplo es [InMemoryCache](https://github.com/gbenm/qmap/blob/main/src/cache/__testing__/InMemoryCache.ts) que únicamente se encarga
de tener los valores en memoria.

### Creación
Se debe heredar a `CacheStore`

```typescript
import { CacheStore } from "@qmap/engine"

export default class InMemoryCache extends CacheStore<string> {
    //...
}
```

- Es preferible que el método `_hasKey` no de excepciones

### Agregar `CachePolicy`
Para agregar políticas al store, se utiliza `accept`
```javascript
const cache = new InMemoryCache().accept(policy)
```

## CachePolicy
### Qué es?
Este componente se encarga de gestionar o transformar las
llaves, **no debería** guardar los valores explicitamente
sino dejar que su `cache` maneje este procedimiento. Ejemplos:

- [HashCache](https://github.com/gbenm/qmap/blob/main/src/cache/__testing__/HashCache.ts)
- [FifoCache](https://github.com/gbenm/qmap/blob/main/src/cache/__testing__/FIFOCache.ts)

### Creación
Se debe heredar a `CachePolicy`

```typescript
import { CachePolicy } from "@qmap/engine"

export default class MyCachePolicy extends CachePolicy<string, number> {
    //...
}
```

- Es preferible que el método `hasKey` no de excepciones

- `save` toma un clave externa y la transforma a una clave interna, en ejemplo anterior debe mappear una clave `string` a `number` la que será usada dentro del propio cache

    ```typescript
    import { CachePolicy } from "@qmap/engine"

    export default class MyCachePolicy extends CachePolicy<string, number> {
        private keyMap: { [k: number]: unknown } = {}

        save(key: string, data: unknown): number {
            const innerKey = key.length
            const nextCacheKey = this.cache.save(innerKey, data)
            this.keyMap[innerKey] = nextCacheKey
            return innerKey
        }
    }
    ```

    No es necesario transformar la key, se puede tener un `CachePolicy<T, T>` y
    devolver la misma clave de tipo `T`, por ejemplo un FIFO, LRU, etc. No
    necesitan transformar las claves sólo gestionar el espacio

- `update`, `remove`, `hasKey` y `lookup` utilizan el innerKey, en este caso `number`

### Encadenar políticas
Se utiliza el método `pipe` este devuelve la misma instancia, por lo que
llamar `pipe` varias veces sólo sutituye el siguiente en la cadena, se debe tener cuidado.

#### Encadenar 2 instancias
```javascript
const hashCachePolicy = new HashCache().pipe(new FifoCache(100))
```

#### Encadenar más de 2 instancias
```javascript
const hashCachePolicy = hashCache.pipe(fifo.pipe(other))
```
El orden de en que ocurren las llamadas es `hashCache ->  fifo -> other -> store`

### Usar `chain`
Para no utilizar `pipe` directamente se puede utilizar `chain`

```javascript
import { chain } from "@qmap/engine"

const hashCache = chain(new HashCache(), new FifoCache(100), new OtherPolicy())
```

El orden de en que ocurren las llamadas es `Hash ->  Fifo -> OtherPolicy -> CacheStore`
