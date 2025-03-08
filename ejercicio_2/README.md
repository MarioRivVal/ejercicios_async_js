# Visualizador de Pokémon de la Primera Generación

## Descripción

La aplicación recupera datos de la PokeAPI
(`https://pokeapi.co/api/v2/pokemon/{id}`) para mostrar información detallada de
un Pokémon aleatorio de la primera generación (1-151). Los usuarios pueden
obtener un nuevo Pokémon haciendo clic en el botón "Catch it!".

## Mejoras Implementadas

1.  **Generación Aleatoria de Pokémon:**
    - Al cargar la página y al hacer clic en el botón "Catch it!", se genera un
      número aleatorio entre 1 y 151 para obtener un Pokémon aleatorio de la
      primera generación.
2.  **Visualización Detallada del Pokémon:**
    - Se muestra información detallada del Pokémon, incluyendo:
      - Imagen del Pokémon.
      - Nombre del Pokémon.
      - Especie.
      - Tipos.
      - Habilidades.
      - Peso (en kg).
      - Altura (en metros).
3.  **Botón "Catch it!" para Obtener Nuevo Pokémon:**
    - Se ha implementado un botón que permite a los usuarios obtener un nuevo
      Pokémon sin necesidad de recargar la página.
4.  **Manejo de Datos Asíncrono con `async/await` y `try/catch`:**
    - Se utiliza `async/await` para realizar las solicitudes a la PokeAPI, lo
      que mejora la legibilidad y el manejo de las promesas.
    - Se ha implementado `try/catch` para manejar errores en las solicitudes a
      la API, asegurando que la aplicación no se detenga si ocurre un error.
5.  **Formateo de Datos:**
    - Se ha creado una función `formatData` para procesar y formatear los datos
      obtenidos de la API, lo que mejora la legibilidad y el mantenimiento del
      código.
    - El peso y la altura se dividen por 10 para mostrar los valores en
      kilogramos y metros, respectivamente.
    - Los tipos y habilidades se muestran como cadenas separadas por comas.
6.  **Separación de Funciones:**
    - Las funciones están bien separadas y organizadas para mejorar la
      legibilidad y el mantenimiento del código:
      - `catchPokemon`: Genera un número aleatorio y obtiene los datos del
        Pokémon.
      - `getData`: Realiza la solicitud a la PokeAPI.
      - `printData`: Actualiza la interfaz de usuario con los datos del Pokémon.
      - `formatData`: Formatea los datos obtenidos de la API.
7.  **Mejoras en el CSS:**
    - Se ha mejorado el diseño CSS para que la aplicación sea más atractiva
      visualmente:
      - Se ha utilizado la fuente "Roboto" de Google Fonts para mejorar la
        tipografía.
      - Se ha añadido una tarjeta de Pokémon con sombras y bordes redondeados.
      - Se ha agregado una transicion al pasar el raton por encima de la card de
        pokemon.
      - La imagen del Pokémon se muestra en un círculo.
      - Se ha añadido un botón con una transición de color al pasar el cursor.
8.  **Experiencia de Usuario Mejorada:**
    - La aplicación proporciona una experiencia de usuario fluida y agradable,
      permitiendo a los usuarios descubrir nuevos Pokémon con facilidad.

## Estructura de Archivos

- `index.html`: Estructura HTML de la página.
- `style.css`: Estilos CSS de la página.
- `script.js`: Lógica JavaScript de la aplicación.

## Dependencias

- PokeAPI: `https://pokeapi.co/api/v2/pokemon/{id}`
- Google Fonts (Roboto): Para la tipografía.
