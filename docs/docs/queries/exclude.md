---
sidebar_position: 8
---
# Excluir
Permite eliminar valores del resultado, es de
utilidad en combinación con el operador `...`:

```javascript
const query = `{
    ...,
    !serial,
    id: serial
}`
```
En este caso es necesario borrar `serial` ya que el operador
`...` ya lo ha incluido en el resultado.

- Se declara como `!KEY`, dónde `KEY` es una clave en el resultado
(no en el JSON de entrada).
```javascript
const query = `{
    !serial,
    ...,
    id: serial
}` // !serial no afecta al resultado

const query = `{
  ...,
  id: product.id,
  !id
}` // se ha eliminado el campo renombrado
```
- Se pueden usar claves con comillas `""`

:::caution
Tenga cuidado!, como se ha comentado **exclude** no está limitado
a borrar lo agreado por `...`
:::
