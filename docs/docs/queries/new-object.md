---
sidebar_position: 5
---

# New object

Permite definir una agrupación de queries y nombrarla.

## Notación
Se agrega un [rename](./rename) al inicio y luego unas
llaves `{}` que contienen las queries.

```javascript
const query = `{
    NAME: {
        query1,
        query2
    }
}`
```

## Ejemplo
Considerando lo siguiente:

```javascript
const input = {
    tid: 1920,
    product_id: 200,
    product_name: "My Product"
}
```

Aplicando esta query:

```javascript
const query = `{
    id: tid,
    product: {
        id: product_id,
        name: product_name
    }
}`
```

Se obtiene esto:

```javascript
const result = {
    id: 1920,
    produt: {
        id: 200,
        name: "My Product"
    }
}
```

:::info
El scope de `new object` es el mismo que el de dónde se define, por lo que para el
índice es lo mismo que si se hubieran definido en el mismo objeto.
`includes(["tid"])`, `includes(["product_id"])`, `includes(["product_name"])`, serán
verdadero, mientras que `includes(["product"])` es falso ya que simplemente se hizo
una agrupación con ese nombre, más no se consultó `product` de la entrada.
:::
