---
sidebar_position: 5
---
# Include All

```javascript
const query = `{
    ...
}`
```
Este operador copia todos los valores del JSON de
entrada al resultado. Es de utilidad cuándo no se requiere filtrar
información sino que modificar algunos valores.

```javascript
const query = `{
    ...,
    upperCase(name)
}`
