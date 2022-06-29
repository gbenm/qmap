---
sidebar_position: 4
---

# Rename
Sirve para reemplazar el nombre que tiene por defecto una consulta
(en la selección es el mismo nombre de la clave, en el acceso es
la concatenación y en las funciones es la concatenación de los
nombres de los parámetros).

```javascript
const query = `{
    alias: "my query" {
        id, name
    },
    other: other."field in".object,
    result: upperCase(text)
}`
```
