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

```JavaScript
// En un componente

"user client"

// En otro componente

"user server"

```
