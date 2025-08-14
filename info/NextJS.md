# Framework NextJS

Aprendizaje y desarrollo de proyectos del framework Next.js

## Descripción

Next.js es un framework de desarrollo web basado en React, diseñado para permitir la renderización del lado del servidor y la generación de sitios estáticos. Fue creado por Vercel (anteriormente Zeit) y es ampliamente utilizado para construir aplicaciones web rápidas, escalables y optimizadas para SEO. Entre sus principales características se incluyen:

- **Renderización del lado del servidor (SSR)**: Permite renderizar las páginas en el servidor antes de enviarlas al cliente, mejorando así el rendimiento y la optimización para motores de búsqueda.
- **Generación de sitios estáticos (SSG)**: Permite generar páginas HTML estáticas en tiempo de construcción, lo que mejora la velocidad de carga y la seguridad.
- **Enrutamiento basado en archivos**: Facilita la creación de rutas mediante el uso de la estructura de directorios, sin necesidad de configuración adicional.
- **Soporte para CSS y Sass**: Permite importar y utilizar archivos CSS y Sass directamente en los componentes.
- **Optimización de imágenes**: Incluye un componente de imagen optimizado que permite cargar imágenes de manera eficiente, reduciendo el tiempo de carga.
- **Pre-renderizado incremental**: Genera y actualiza páginas estáticas a medida que son solicitadas, mejorando la experiencia del usuario.
- **API Routes**: Permite crear endpoints API directamente dentro de la aplicación Next.js, facilitando la integración con servicios externos y bases de datos.
- **Compatibilidad con TypeScript**: Ofrece soporte completo para TypeScript, mejorando la productividad y la seguridad del código.

## Ventajas

- **SEO-friendly**: La renderización del lado del servidor y la generación de sitios estáticos mejoran la indexación por parte de los motores de búsqueda.
- **Rendimiento**: La optimización automática y la capacidad de servir contenido estático hacen que las aplicaciones sean rápidas y eficientes.
- **Experiencia de desarrollo**: La integración con React y la facilidad de configuración permiten a los desarrolladores centrarse en la construcción de funcionalidades sin preocuparse por la infraestructura.
- **Flexibilidad**: Admite múltiples estrategias de renderización (SSR, SSG, CSR) y se puede integrar fácilmente con APIs y bases de datos.

# Conceptos básicos

- Cada archivo que no este en una carpeta que sea una ruta es una pagina general.
- Tenemos a `page.jsx` `layout.jsx` y `not-found.jsx`
- `layout.jsx` se puede maquetar, children es el hijo de cada ruta (archivo `page.jsx`).
- Se puede anidar layouts
- Se puede modificar los metadas en cada archivo page de cada ruta.
- Metadatos dinamicos para rutas dinamicas.
- Solo ejecuta archivos llamados page layout o not-found
- El resto de archivos pueden usarse como componentes
- Se puede crear los componentes afuera de la carpeta app
- Sistema de enrutamiento basado en archivos

## Comandos

```Bash
npx create-next-app@latest
```

## Rutas

- Cada carpeta dentro de la carpeta `src/app/` es una ruta y debe contener el archivo `page.jsx` o `page.tsx`.
- ruta: `localhost:3000/nombreCarpeta`.
- Permite el anidamiento de rutas.
- Te genera un `layout.jsx` o `layout.tsx` automaticamente.
- Nombradas en español
- También se puede integrar layouts en cada ruta

```JSX

// Layout de una ruta

export default function BlogLayout(){
  return (
    <>
      <div></div>
      <div></div>
      <div></div>
    </>
  )
}
```

### Rutas dinamicas

- Nombre de la carpeta: `[productId]`
- Nombradas en ingles
- Anidamiento de rutas dinamicas y básicas

```JSX

// Carpeta: [productId]
// Archivo: page.jsx

export default function ProductDetail({params}){
  return <h1>Producto {params.productId}</h1>
}
```

### Rutas protegidas u oculta

Nombre de la carpeta: `_nombreCarpeta`

### Rutas agrupadas

- Agrupa varias rutas en un sola ruta.
- Nombre: `(nombreCarpetaAgrupa)`
- Ayuda a tener un estructura mucho mas comoda al momento de desarrollar

## Integración de estilos CSS

- Se importa en `layout.jsx` como se hace en React
- **Revisar documentación**

## Uso de enlaces

- Usa el componente Link para no volver a cargar toda la pagina.
- Optimiza la pagina

```JSX
import Link from 'next/link'

export default function Name(){
  return (
    <html>
      <body>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </body>
    </html>
  )
}
```

## Importación de fuentes

```JSX
import Link from 'next/link'
import { OpenSans, Inter } from 'next/font/google'

const opensans = OpenSans({
  weight: ["300", "400"],
  style: ["bold"],
  subsets: ["latin"]
})

export default function Name(){
  return (
    <html>
      <body className = {opensans.className}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </body>
    </html>
  )
}
```

```JavaScript

console.log("hola mundo");

function name(){
  return "funcion";
}
```

## Componentes del cliente y servidor

### `use client`

Permite darle interactividad a los componentes, esto involucra a los manejadores de eventos. Es por ello que se tiene que renderizar por el lado del cliente (navegador).

- Los componentes llamados en otro componentes que si usa `use client`
- Los metadata solo funcionan en componentes del lado del servidor
- Cuando se piden o acceso a datos se usa componentes del lado del servidor

## fetch data

Peticiones de datos a una API, los componentes también pueden ser funciones asincronas que muestra datos.
Las peticiones y el envio de datos se pueden separar en componentes de servidor y cliente

## Pagina loading

El archivo loading permite mostrar información al usuario de que los datos se estan cargando. Este archivo se debe de llamar `loading.jsx`
