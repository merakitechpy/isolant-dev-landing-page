# Isolant Paraguay — Sitio web reconstruido

Sitio estático HTML/CSS/JS reconstruido a partir del snapshot del Wayback Machine
del sitio original. Estética modernizada manteniendo la identidad de marca (azul
corporativo + acento naranja cálido evocando el calor que aíslan los productos).

---

## 📁 Estructura

```
isolant-paraguay/
├── index.html              ← página principal
├── css/
│   └── styles.css          ← estilos modernizados
├── js/
│   └── main.js             ← slider, menú móvil, animaciones, formulario
└── images/
    ├── logo-color.svg      ← logo en color (header) ✅ ya incluido
    ├── logo-white.svg      ← logo blanco (footer)   ✅ ya incluido
    ├── icons/              ← redes sociales y whatsapp ✅ ya incluidos
    ├── slider/             ← ⚠️ FALTA: slide-1.jpg, slide-2.jpg
    ├── about/              ← ⚠️ FALTA: about.jpg
    └── products/
        ├── thumbnails/     ← ⚠️ FALTA: 6 fotos (atacama, cedro-net, etc.)
        └── *.png           ← ⚠️ FALTA: 6 packshots (atacama, cedro-net, etc.)
```

---

## ⚠️ IMPORTANTE: imágenes faltantes

El sitio está **100% funcional** pero las fotos JPG/PNG hay que descargarlas
desde el Wayback Machine. Sin ellas, los espacios donde van se ven con un
gradiente azul (no se rompe el diseño, pero queda incompleto).

### Lista completa de imágenes a descargar:

**Slider (2 imágenes — `images/slider/`):**
- `slide-1.jpg` ← desde: https://web.archive.org/web/2025*/isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fslider%2Fslide-3.jpg&w=1920&q=75
- `slide-2.jpg` ← desde: https://web.archive.org/web/2025*/isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fslider%2Fslide-2.jpg&w=1920&q=75

**Empresa (1 imagen — `images/about/`):**
- `about.jpg` ← https://web.archive.org/web/2025*/isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fabout.jpg&w=1920&q=75

**Productos thumbnails (6 imágenes — `images/products/thumbnails/`):**
- `atacama.jpg`
- `cedro-net.jpg`
- `contrapiso-acoustic.jpg`
- `rufi-aluminio.jpg`
- `rufi-aluminizada.jpg`
- `rufi-doble-aluminizada.jpg`

URL base: `https://web.archive.org/web/2025*/isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fthumbnails%2F[NOMBRE].jpg&w=1080&q=75`

**Productos packshots (6 imágenes — `images/products/`):**
- `atacama.png`
- `cedro-net.png`
- `contrapiso-acoustic.png`
- `rufi-aluminio.png`
- `rufi-aluminizada.png`
- `rufi-doble-aluminizada.png`

URL base: `https://web.archive.org/web/2025*/isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2F[NOMBRE].png&w=1080&q=75`

---

### 🔽 Cómo descargarlas (la forma fácil)

**Opción 1 — Manual desde el navegador:**

1. Abrí cada URL del listado de arriba en el navegador (reemplazando `2025*` por la fecha real, por ejemplo `20250227172504`).
2. Click derecho sobre la imagen → **"Guardar imagen como…"**.
3. Guardá con el nombre exacto que dice arriba (ej: `slide-1.jpg`) en la carpeta correspondiente.

URLs ya armadas para copiar y pegar (con la fecha del snapshot original):

```
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fslider%2Fslide-3.jpg&w=1920&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fslider%2Fslide-2.jpg&w=1920&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fabout.jpg&w=1920&q=75

https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fthumbnails%2Fatacama.jpg&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fthumbnails%2Fcedro-net.jpg&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fthumbnails%2Fcontrapiso-acoustic.jpg&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fthumbnails%2Frufi-aluminio.jpg&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fthumbnails%2Frufi-aluminizada.jpg&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fthumbnails%2Frufi-doble-aluminizada.jpg&w=1080&q=75

https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fatacama.png&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fcedro-net.png&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Fcontrapiso-acoustic.png&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Frufi-aluminio.png&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Frufi-aluminizada.png&w=1080&q=75
https://web.archive.org/web/20250227172504/http://isolant.com.py/_next/image?url=%2Fimages%2Fhomepage%2Fproducts%2Frufi-doble-aluminizada.png&w=1080&q=75
```

**Opción 2 — Script automático (terminal con `wget` o `curl`):**

Ejecutá `descargar-imagenes.sh` (incluido en el ZIP) desde la carpeta del sitio.

---

## 🧪 Probar localmente antes de subir

Lo más simple: doble click sobre `index.html` y se abre en tu navegador.
Para ver bien las animaciones de scroll, podés iniciar un servidor mini:

```bash
# Si tenés Python 3:
cd isolant-paraguay
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

---

## 🚀 Subir a DonWeb (cPanel / Plesk)

### Si usás cPanel:

1. Entrá a cPanel desde el panel de DonWeb (suele ser `tudominio.com/cpanel` o accedés desde el área de cliente de DonWeb → "Administrar hosting").
2. Buscá el ícono **"Administrador de archivos"** (o "File Manager").
3. Navegá a la carpeta **`public_html`** (esta es la carpeta raíz que se sirve en `isolant.com.py`).
4. Si hay archivos viejos ahí (un `index.html` por ejemplo), borralos primero.
5. Click en **"Cargar"** (o "Upload") arriba a la derecha.
6. Seleccioná **TODOS** los archivos y carpetas del proyecto (`index.html`, `css/`, `js/`, `images/`).
   - Tip: comprimí la carpeta entera en un `.zip` y subí solo el ZIP, después click derecho → "Extraer".
7. Una vez extraído, asegurate de que `index.html` quede directamente en `public_html/` (no en una subcarpeta).
8. Visitá `https://isolant.com.py` en el navegador → debería cargar el sitio.

### Si usás Plesk:

1. Entrá a Plesk desde el panel de DonWeb.
2. Click en tu dominio `isolant.com.py`.
3. Buscá **"Archivos"** en el menú lateral.
4. Navegá a **`httpdocs/`** (es la carpeta raíz del sitio en Plesk).
5. Borrá lo que esté ahí, luego subí todos los archivos del proyecto (mismo proceso del ZIP que en cPanel).

### Si preferís FTP (más rápido para muchos archivos):

1. Descargá [FileZilla](https://filezilla-project.org/) (gratis).
2. En DonWeb, en el panel de tu hosting buscá las **credenciales FTP** (servidor, usuario, contraseña).
3. En FileZilla:
   - Servidor: `ftp.tudominio.com` (o el que diga DonWeb)
   - Usuario: el que indique DonWeb
   - Contraseña: la que indique DonWeb
   - Puerto: `21` (FTP) o `22` (SFTP)
4. Conectate. En la ventana derecha (servidor) navegá a `public_html` o `httpdocs`.
5. En la izquierda (tu PC), navegá a la carpeta del proyecto.
6. Seleccioná todo (Ctrl+A) y arrastralo a la derecha.

---

## ✅ Checklist post-subida

- [ ] El logo se ve bien arriba a la izquierda
- [ ] El slider rota cada 6 segundos
- [ ] Las imágenes de productos aparecen (si las descargaste)
- [ ] El menú móvil se abre con el botón hamburguesa
- [ ] Los enlaces internos hacen scroll suave
- [ ] El botón flotante de WhatsApp funciona
- [ ] El formulario de contacto abre el cliente de email al enviar
- [ ] El sitio se ve bien en celular (probalo desde el teléfono)

---

## 🎨 Diferencias respecto al sitio original

**Mantenido (igual al original):**
- Estructura: Inicio + Empresa + Productos + Contacto
- Todos los textos exactos
- Logo, redes sociales, datos de contacto
- Lista de 6 productos con sus descripciones

**Modernizado:**
- Tipografías Manrope + Poppins (más distintivas)
- Sección nueva de **estadísticas** (años de experiencia, grados de aislación, etc.) — editable en `index.html`
- Slider con dots y arrows con efecto cristal (glassmorphism)
- Tarjetas de productos con hover suave + packshot flotante
- Formulario de contacto propio (en lugar de Bitrix), abre `mailto:` al enviar
- Animaciones de fade-in al hacer scroll
- Botón flotante de WhatsApp con pulso
- Backdrop-filter en el header (efecto blur al hacer scroll)
- Mejor responsive en móvil

---

## 📞 Si algo no funciona

- **Las imágenes no cargan**: verificá que estén con el nombre exacto en la carpeta correcta. Los nombres distinguen mayúsculas/minúsculas en servidores Linux.
- **El sitio se ve sin estilos**: probablemente la carpeta `css/` no se subió bien, o el archivo `styles.css` no está en `css/styles.css` exactamente.
- **El slider no rota**: el archivo `js/main.js` no se subió o no se cargó. Abrí la consola del navegador (F12) y mirá si hay errores rojos.
- **El formulario no envía**: usa `mailto:` (abre el cliente de email del usuario). Si querés un formulario que envíe directamente desde el servidor, necesitarías PHP o un servicio externo (Formspree, EmailJS, Web3Forms — todos tienen plan gratis).
