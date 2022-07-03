---
sidebar_position: 9
---
# Spread
Este operador no provoca cambios en el JSON, sólo tiene
el objetivo de reutilizar declaraciones.

```javascript
const query = `{
    user {
        id,
        name,
        account {
            id
        }
    },
    professor {
        ...user,
        classes
    },
    account {
        ...user.account,
    }
}`
```
Sería lo mismo que tener
```javascript
const query = `{
    user {
        id,
        name,
        account {
            id
        }
    },
    professor {
        id,
        name,
        account {
            id
        },
        classes
    },
    account {
        id
    }
}`
```

Se copia según el scope, por lo que en el caso de que
exista un padre cercano con la dirección que se especificó
y otra al inicio de la query, se copiará la más cercana,
para especificar explicitamente que se parta desde la raíz
de la consulta, utilice `&`.
```javascript
const query = `{
    target { name },
    pub {
        target {
            other
        },
        person {
            ...&target
        }
    }
}`
```
Lo anterior es equivalente a:
```javascript
const query = `{
    target { name },
    pub {
        target {
            other
        },
        person {
            name
        }
    }
}`
```
