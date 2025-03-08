# Detalles del Personaje de Game of Thrones

Este proyecto es una aplicación web simple que utiliza la API pública de Game of
Thrones para mostrar información sobre los personajes. Los usuarios pueden
seleccionar un personaje de un menú desplegable y ver su imagen y detalles
básicos.

## Descripción

La aplicación recupera datos de la API
`https://thronesapi.com/api/v2/Characters`, crea un menú desplegable con los
nombres de los personajes y muestra la imagen y la información del personaje
seleccionado.

## Mejoras Implementadas

1.  **Ordenamiento Alfabético del Menú Desplegable:**
    - Los nombres de los personajes en el menú desplegable están ordenados
      alfabéticamente, lo que mejora la usabilidad y facilita la búsqueda de un
      personaje específico.
2.  **Manejo de Datos en Variables Globales:**
    - Se han utilizado variables globales (`charactersInfo`, `charactersName`)
      para almacenar los datos recuperados de la API. Esto permite un acceso más
      eficiente a los datos sin necesidad de realizar múltiples solicitudes a la
      API.
3.  **Función de Construcción de Opciones del Menú Desplegable:**
    - Se ha creado una función `buildOptionEl` para generar dinámicamente las
      opciones del menú desplegable, lo que mejora la legibilidad y el
      mantenimiento del código.
4.  **Función de Impresión de la Información del Personaje:**
    - Se ha creado una funcion `printCharacterInfo` para mostrar los datos de
      los personajes en el HTML, mejorando la lectura del codigo y su
      mantenimiento.
5.  **Manejo de Errores:**
    - Se implemento el bloque `catch` en la llamada a la API `fetch` para
      manejar errores y mostrar un mensaje en la consola en caso de fallo en la
      llamada.
6.  **Uso de Iconos:**
    - Se ha añadido iconos de Font Awesome para mejorar la presentación visual
      de los detalles del personaje, haciendo la interfaz más atractiva.

## Estructura de Archivos

- `index.html`: Estructura HTML de la página.
- `style.css`: Estilos CSS de la página.
- `script.js`: Lógica JavaScript de la aplicación.
- `img/img-wirefame.png`: Imagen placeholder.

## Dependencias

- Font Awesome (CDN): Para los iconos.

## API Utilizada

- Game of Thrones API: `https://thronesapi.com/api/v2/Characters`
