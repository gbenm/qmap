---
sidebar_position: 1
---
# Select
```javascript
const query = `{
    id,
    description,
    provider {
        name
    },
    "un campo extra"
}`
```
Permite seleccionar que información se va incluir en el
resultado. Si una llave declarada en la selección no existe,
el valor será `null`.

- No hay límite en la anidación de la selección.
- Si no existe una selección sobre la llave se trae
toda la información sin modificar.
- No se permite dejar las llaves en blanco, es decir `provider {}`
es considerado un error.
- Si el contenido de la llave es un arreglo, la selección es aplicada
a los elementos.
- Las claves sin comillas son valores que cumplen con la expresión regular
`[a-zA-Z_$][a-zA-Z0-9_$]*`.
- Si una clave no cumple con la expresión regular anterior, se debe declarar
entre comillas (`""`), por ejemplo `"value 1"`.
