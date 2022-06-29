# QMap

![NPM](https://img.shields.io/npm/l/@qmap/engine)
![npm](https://img.shields.io/npm/v/@qmap/engine)
![AppVeyor](https://img.shields.io/appveyor/build/gbenm/qmap)
![Testspace pass ratio](https://img.shields.io/testspace/pass-ratio/gbenm/gbenm:qmap/main)

Es un motor para manipulación JSON.

![Demo](./demo.gif)

## Contenido
- [Capacidades](#capacidades)
- [Motivación](#motivación)

## Capacidades
- Limitación por medio de `schemas`
- Predefinición de queries, por medio de `queries`
- Declaración de funciones, por medio de `functions`
- Selección de campos
- Renombrar campos
- Reutilización de queries
- Accesos a campos internos (para aplanarlos o utilizarlos
    en una función)
- Funciones con o sin variables
- La capacidad de aplicar `array queries`
    - Selección
    - Acceso
    - Se pueden aplicar las funciones a los elementos
        del array.

> Documentación de [qmap](https://gbenm.github.io/qmap/)

## Motivación
JSON es una de las formas más ampliamente utilizadas para
intercambiar información mediante HTTP, una característica
con la que se debe lidiar es qué información se debe mandar
como respuesta, las aplicaciones consumen la información
de muchas maneras y eso resulta en que a veces no es necesaria
toda la que nos pueda entregar un endpoint,
para llevar esto, simplemente se puede ignorar
y siempre obtener toda la información (en caso de ser utilizadas
con datos móviles es un derroche), o tal vez crear filtros con
los que se pueda minimizar el problema, la cuestión, es que esto
provoca tener que mantener más código.

QMap permite por medio de la declaración de queries manipular
el contenido del JSON, dando flexiblilidad a lo que
se puede consumir de un endpoint (la forma en
que se envía la query depende del desarrollador, por ejemplo,
para un endpoint GET simplemente puede mandarse como un query string,
además que si es `null` **qmap** devuelve el mismo objeto,
es decir que no lo modifica), también
agrega el poder de restringir y disminuir el tamaño
de las queries. El lado de la restricción se obtiene al declarar
`schemas` (opcionales) que indican un límite sobre lo que se
puede extraer del JSON, por ejemplo al indicarle que use el
schema **user** la información disponible sería diferente a la
que si usara **admin** (los nombres los define el desarrollador,
véase [schemas](#utilizando-schemas)), esto da la flexibilidad
de cambiar de un enfoque de "se incluyen los datos
porque el rol así lo define" a un "se debe incluir
la información?" y ya es la librería la que se encarga
de filtrar la información que puede o no consultar. Por otra parte
la disminución del tamaño es consecuencia de que en el lado del
servidor se pueden declarar queries, el cliente puede realizar
una consulta sobre una query ya definida y sólo modificar
lo que le interese (véase [queries](#utilizando-queries)).

Otro problema puede nacer al consumir APIs de terceros, por ejemplo,
si esta devuelve:
```json
{
  "id": "1",
  "price": 2.3,
  "description": "..."
}
```
pero el sistema únicamente necesita el precio para poderlo
mostrar, puede de una forma declarativa transformarlo a:
```javascript
const query = `{ currency(price) }`

const result = {
  "price": "$2.30"
}
```

> Puede consultar [Uso](#uso) para más información.

En la documentación se toma el enfoque de consumo
de información por medio de HTTP, pero la librería
no depende de nada del protocolo, por lo que puede
usarla dónde prefiera, siempre y cuándo exista
un JSON al cuál modificar.
