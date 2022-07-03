---
sidebar_position: 6
---

# Global Access

Permite realizar queries sobre el root del JSON de entrada, lo que
ayuda a mover información del nivel superior a niveles más internos.

## Notación
Se antepone un `&.` y luego se procede igual que en [access](./access).

```javascript
const query = `{
    product {
        id,
        name,
        &.provider.name
    }
}`
```

## Válido en:
- `select` y `access`
- Cómo argumentos para `function`
- `rename`

## Ejemplo
Considerando lo siguiente:

```javascript
const input = {
    provider: {
        id: 10,
        name: "TheOne"
    },
    transaction: {
        id: 100,
        product_id: 19,
        product_name: "Pants"
    }
}
```

Aplicando esta query:

```javascript
const query = `{
    transaction {
        id,
        product: {
            id: product_id,
            name: product_name,
            provider: &.provider.name
        }
    }
}`
```

Se obtiene esto:

```javascript
const result = {
    transaction: {
        id: 100,
        product: {
            id: 19,
            name: 'Pants',
            provider: 'TheOne'
        }
    }
}
```

### Por qué [new object query](./new-object)?
Puede surgir la duda de porque no simplemente utilizar [select](./select)
para nombrar la agrupación. No existe ninguna query basada en el campo `product`
y en los datos de entrada tampoco existe esta clave, si se utiliza `select` el resultado
será:

```javascript
const result = {
    transaction: {
        id: 100,
        product: null
    }
}
```

Esto se debe a que como no existe ningún campo product en el cuál realizar la selección
simplemente se devuelve `null` como lo acordado anteriormente.

:::note
Otro problema sobre utilizar la selección es que estará agregando campos al índice, que
no debería tener.
:::
