---
sidebar_position: 2
---
# Access
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
- Admite cualquier nivel de acceso
- El nombre por defecto es la concatenación de
los valores separados por punto.
- Se permite utilizar las claves con comillas (`""`)
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

Cualquier clave puede referirse a un arreglo y no se restringe
la cantidad de arreglos admitidos, tenga cuidado de no resultar
con arreglo de arreglos, si esto no es lo que necesita.

```javascript
const input = {
  objects: [
    { id: 1, objects: [{ value: 10 }, { value: 15 }] },
    { id: 2, objects: [{ value: 20 }, { value: 25 }] },
  ]
}

const query = `{
  result: objects.objects.value
}` // { result: [ [ 10, 15 ], [ 20, 25 ] ] }
```

Tampoco requiere que los datos sean del mismo tipo
(por favor, no se asuste xD):

```javascript
const input = {
  objects: [
    {
      objects: [
        { value: 10 }, { values: [{ value: 40 }] }
      ]
    },
    { objects: { values:  { value: 30 }  } },
  ]
}

const query = `{
  result: objects.objects.values.value
}` // { "result": [ [ null, [ 40 ] ],30 ]}
```
