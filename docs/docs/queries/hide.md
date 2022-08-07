---
sidebar_position: 11
---

# Hide nodes
No tienen efecto sobre el resultado y el índice, su único propósito es
servir para tener queries para reutilizar.

## Notación
Se antepone `~` al nombre, **no es válido utilizar `""`** para nombrar
estos nodos.

```javascript
const query = `{
    ~common {
        id, name
    },
    user {
        ...common
    }
}`
```
:::note
En el ejemplo se utiliza [spread](./spread)
:::
