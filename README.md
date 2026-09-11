# El Crujiente Light — Landing Page

Landing page para la marca de lechona colombiana **El Crujiente Light**, construida en HTML, CSS y JavaScript puro (sin frameworks ni build tools).

## Concepto creativo

**"Tradición que cruje"** — la piel dorada y crujiente de la lechona como metáfora de la marca: tradición colombiana con una experiencia digital moderna, apetitosa y premium. El motivo visual recurrente es un **borde irregular tipo "mordisco/chicharrón"** que separa algunas secciones, en lugar de líneas rectas genéricas — es el guiño visual a lo "crujiente".

Paleta: vino profundo, rojo, naranja tostado y dorado sobre fondo crema — fiel a la identidad actual (rojo, vino, naranja, dorado, amarillo, blanco/crema) pero llevada a un tratamiento más limpio y editorial. Tipografía: **Fraunces** (titulares, con carácter) + **Manrope** (texto, moderna y legible).

## Estructura de la página

Header fijo → Hero (lechona a pantalla completa) → Marca ("No es solo lechona") → Nuestro sello (4 valores) → Producto destacado → Menú por categorías (con tabs) → Sección de antojo (foto de impacto) → Eventos → Galería → Testimonios → Redes sociales → Contacto → CTA final → Footer. Botón de WhatsApp flotante en todo momento.

Diseñada **mobile-first**: botones grandes, menú hamburguesa en celular, imágenes que se adaptan y sin scroll horizontal.

## Tecnología

HTML5 + CSS3 (variables CSS, Grid y Flexbox) + JavaScript vanilla. Sin dependencias externas, excepto la carga de fuentes de Google Fonts (Fraunces y Manrope). Esto la hace muy liviana y rápida de cargar.

## Cómo ejecutarla

1. Descarga o copia la carpeta completa `el-crujiente-light/`.
2. Abre el archivo `index.html` directamente en tu navegador (doble clic), o usa un servidor local simple, por ejemplo:
   ```
   cd el-crujiente-light
   python3 -m http.server 8000
   ```
   y entra a `http://localhost:8000` en tu navegador.
3. Para subirla a internet, puedes usar cualquier hosting estático (Netlify, Vercel, GitHub Pages, Hostinger, etc.) subiendo estos mismos archivos.

## Cómo cambiar la información de la marca (todo en un solo lugar)

Abre el archivo **`script.js`** y edita el objeto `CONFIG` al inicio del archivo:

```js
const CONFIG = {
  NOMBRE_MARCA: "El Crujiente Light",
  WHATSAPP_NUMBER: "573000000000",   // Número real con indicativo de país, sin espacios ni signos
  WHATSAPP_MENSAJE: "Hola, quiero hacer un pedido de lechona El Crujiente Light.",
  TIKTOK_USER: "crujientelight",
  TELEFONO: "[TELEFONO]",
  DIRECCION: "[DIRECCIÓN]",
  CIUDAD: "[CIUDAD]",
  HORARIO: "[HORARIO]",
};
```

Al guardar y recargar la página, **todos** los botones de WhatsApp y el enlace de TikTok se actualizan automáticamente en toda la página (header, hero, menú, eventos, CTA final, botón flotante, footer, etc.), porque todos apuntan a esta única fuente de datos.

Ya están configurados los dos números reales de la marca como WhatsApp:
- `WHATSAPP_NUMBER`: **322 536 4471** — se usa en todos los botones "Pedir por WhatsApp" de la página.
- `WHATSAPP_NUMBER_2`: **300 476 9747** — aparece como opción adicional en la sección de Contacto.

Si en algún momento cambian estos números, solo edítalos en `script.js`.

Los siguientes campos siguen como texto de marcador de posición dentro de `index.html` porque no fueron proporcionados y no debían inventarse: `[PRECIO]` (en cada producto del menú y producto destacado), `[DIRECCIÓN]`, `[CIUDAD]`, `[HORARIO]` y `[TESTIMONIO REAL]` / `[NOMBRE DEL CLIENTE]` (tres testimonios). Reemplázalos por la información real cuando la tengas — usa buscar y reemplazar en `index.html` para los precios y testimonios, y `script.js` para dirección, ciudad y horario.

## Fotografías y video

Todo va **en la misma carpeta que `index.html`** (no en una subcarpeta). Archivos reales de cámara:

- `lechona-entera-bandeja.jpg` — usada en "Lechona entera" del menú y en la Galería.
- `lechona-corte-crujiente.jpg` — usada en Producto Destacado, Antojo, "Media lechona" y Galería.
- `porciones-empacadas-1.jpg` y `porciones-empacadas-2.jpg` — usadas en "Porción individual/familiar" del menú y Galería.
- `preparacion-real.jpg` — fotograma extraído del video real de corte y servido, usado en la Galería ("Preparación") y como imagen de portada (poster) del video.

Archivo de ambientación (generado/mejorado con IA):

- `hero-ambientacion.jpg` — usada **únicamente como fondo del Hero** (impacto visual de entrada). A propósito NO se usa en Producto Destacado, Menú ni Galería, porque esas secciones deben mostrar el plato exactamente como se sirve, y esta imagen tiene estilismo (lima, perejil) que puede no coincidir con la presentación real. Si más adelante tienes una foto de cámara igual de vistosa para el Hero, esta es la primera que deberías reemplazar.

Video:

- `proceso-corte-web.mp4` — recorte de 4.5 segundos de tu video real de corte y servido (sin audio, comprimido para web), usado en la sección "Nosotros" en loop automático y silenciado.

Los espacios que siguen en degradado (Combos, paquete de Eventos, Contacto, y 2 de la Galería: "Eventos" y "Clientes") siguen así porque falta una foto distinta para cada uno.

Para agregar una foto nueva:

1. Copia el archivo `.jpg` o `.png` en esta misma carpeta (junto a `index.html`).
2. En `index.html`, busca el bloque con `placeholder-img` que corresponda (cada uno tiene un `data-placeholder-label` que indica cuál es) y reemplázalo así:
   ```html
   <!-- Antes -->
   <div class="galeria__item placeholder-img" data-placeholder-label="Eventos"></div>

   <!-- Después -->
   <div class="galeria__item">
     <img class="real-photo" src="nombre-del-archivo.jpg" alt="Descripción de la foto para SEO">
   </div>
   ```
3. Guarda y recarga la página — no hace falta tocar el CSS.

⚠️ Importante: la ruta del `src` debe ser solo el nombre del archivo (`foto.jpg`), sin `images/` ni ninguna carpeta delante, porque todo vive junto en la misma carpeta.

Para cambiar el video de "Nosotros", reemplaza `proceso-corte-web.mp4` por otro archivo (recomendado: menos de 5 segundos, sin audio, ligero) y actualiza el `<source src="...">` en `index.html`.

## SEO ya incluido

- `<title>` y meta description optimizados con las palabras clave objetivo (lechona, lechona colombiana, lechona para eventos, lechona para cumpleaños, lechona a domicilio, pedir lechona).
- Etiquetas Open Graph para compartir en redes.
- Un solo `<h1>` en el Hero y jerarquía `<h2>`/`<h3>` semántica en cada sección.
- Estructura HTML5 semántica (`header`, `main`, `section`, `footer`).
- `alt` descriptivo sugerido para cada imagen una vez reemplaces los placeholders (ver ejemplo arriba).

## Estructura de archivos

```
el-crujiente-light/
├── index.html
├── styles.css
├── script.js
├── lechona-entera-bandeja.jpg
├── lechona-corte-crujiente.jpg
├── porciones-empacadas-1.jpg
├── porciones-empacadas-2.jpg
└── README.md
```

Todo vive en la misma carpeta, sin subcarpetas — así evitas que una foto "se pierda" al descomprimir o mover el proyecto.
