# Framework Astro

Astro esta orientado a crear sitios rápidos y optimizados, con un enfoque en **contenido estático** y **renderizado eficiente**.
Su lema principal es:

> _“Build faster websites”_
> y su filosofía se resume en **“menos JavaScript en el cliente”**.

## Filosofía de trabajo

Utiliza el concepto de **Islands Architecture** (arquitectura de islas):

- El HTML se genera en el **servidor o durante el build**.
- El JavaScript en el cliente se carga **solo cuando es necesario** y de forma parcial.
- Puedes tener componentes interactivos (islas) que se hidratan **independientemente**, sin forzar que toda la página sea SPA.

En otras palabras:

- No necesitas mandar un gran bundle de JS al cliente si solo tienes contenido estático.
- Las partes interactivas se hidratan bajo demanda, mejorando el rendimiento y el SEO.

## Funcionamiento básico

1. **Generación de HTML en el servidor** (SSR) o en tiempo de build (SSG).
2. Astro soporta **archivos `.astro`** que combinan HTML, JavaScript/TypeScript y JSX-like syntax para insertar lógica.
3. Por defecto, **no envía JS al cliente**, a menos que lo marques con directivas como:

   ```astro
   <Counter client:load />  <!-- Se hidrata al cargar -->
   <Counter client:visible />  <!-- Se hidrata cuando es visible -->
   <Counter client:idle />  <!-- Se hidrata cuando el navegador está libre -->
   ```

4. Puedes mezclar componentes de distintos frameworks (React, Vue, Svelte, Solid, Preact, Lit, etc.) en un mismo proyecto.

## Integración con otros paquetes

- **Frameworks de UI**
  Puedes usar componentes de React, Vue, Svelte, Solid, Preact en la misma página.

  ```bash
  npm install @astrojs/react
  ```

  ```astro
  ---
  import Boton from '../components/Boton.jsx';
  ---
  <Boton client:click />
  ```

- **Estilos y CSS**

  - CSS nativo, Sass, PostCSS.
  - Tailwind CSS (`@astrojs/tailwind`).
  - CSS Modules y Scoped CSS en `.astro`.

- **Herramientas de contenido**

  - Markdown y MDX integrados de forma nativa.
  - Soporte para colecciones de contenido tipadas.

- **Integraciones oficiales**
  Astro tiene un sistema de integraciones (`astro add <paquete>`) para instalar y configurar plugins oficiales:

  - `@astrojs/tailwind`
  - `@astrojs/image`
  - `@astrojs/sitemap`
  - `@astrojs/mdx`
  - `@astrojs/vercel`, `@astrojs/netlify`, etc.

- **Compatibilidad con NPM**
  Puedes instalar cualquier paquete de Node.js y usarlo dentro del entorno de Astro.

## Casos de uso

- Blogs y páginas de documentación.
- Sitios estáticos de alto rendimiento.
- Landing pages.
- Sitios híbridos con contenido estático y pequeñas partes interactivas.

## Ventajas clave

- **Rendimiento sobresaliente** (muy poco JS en el cliente).
- **SEO optimizado** por renderizado en servidor.
- **Flexibilidad de integración** con cualquier framework.
- **Simplicidad** para proyectos de contenido.

## Sintaxis básica

Los archivos `.astro` son el corazón del framework.
Su estructura básica es:

```astro
---
/* Bloque de frontmatter en JavaScript/TypeScript */
const titulo = "Hola desde Astro";
---

<!-- HTML normal -->
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>{titulo}</title> <!-- Se puede interpolar JS con llaves -->
  </head>
  <body>
    <h1>{titulo}</h1>
    <p>Este es un archivo .astro</p>
  </body>
</html>
```

🔹 **Reglas clave de sintaxis:**

- La parte de arriba entre `---` se llama **frontmatter** y es código JS/TS que se ejecuta en el servidor.
- El resto es HTML, pero con **interpolación** (`{}`) para variables.
- Soporta **componentes** (`<MiComponente />`) y **directivas de cliente** como `client:load` o `client:visible`.

## Integrar React en Astro

### a) Instalar integración oficial

En tu proyecto Astro:

```bash
npx astro add react
```

Esto:

- Instala `@astrojs/react` y React.
- Configura automáticamente `astro.config.mjs`.

### b) Crear un componente React

Ejemplo: `src/components/Boton.jsx`

```jsx
export default function Boton({ texto }) {
  return (
    <button style={{ padding: "10px", background: "skyblue" }}>{texto}</button>
  );
}
```

También puedes utilizar Astro con Tailwind CSS y tus componentes de otro framework de UI.

### c) Usar el componente en un archivo `.astro`

```astro
---
import Boton from "../components/Boton.jsx";
---

<html lang="es">
  <body>
    <h1>Usando React en Astro</h1>
    <!-- client:load indica que se hidrata en el cliente -->
    <Boton texto="Haz clic aquí" client:load />
  </body>
</html>
```

### Directivas de hidratación en Astro

Cuando integras React (o cualquier framework de UI), necesitas indicar **cuándo** se carga el JS en el cliente:

- `client:load` → al cargar la página.
- `client:visible` → cuando el elemento entra en el viewport.
- `client:idle` → cuando el navegador está libre.
- `client:only="react"` → solo carga en cliente, útil para SPA parciales.
