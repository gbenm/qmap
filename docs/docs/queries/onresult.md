---
sidebar_position: 5
---

# On Result

## Funcionamiento
Permite realizar queries utilizando como input el estado actual
del resultado. Pueden usarse para computo intermedio.

## Notación
Se envuelve en `%{}` la query que se quiere aplicar
sobre el resultado actual.

```javascript
const query = `{
    products: products.name,
    products: take(%{products}, @{3})
}`
```

## Funciona con:
`functions`, `select`, `access`
