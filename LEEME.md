# Cadence — instalar como app en tu iPhone (GitHub Pages)

Este paquete es una **PWA** completa: una app web que el iPhone trata como nativa
(icono propio, pantalla completa, funciona sin conexión, guarda tu progreso).
No necesitas Mac, ni Xcode, ni pagar nada.

## Contenido del paquete

- `index.html` — la app completa (todo va aquí dentro)
- `manifest.json` — identidad de la app (nombre, icono, color)
- `sw.js` — service worker (hace que funcione offline)
- `icon-192.png`, `icon-512.png`, `icon-maskable.png`, `apple-touch-icon.png` — iconos

Sube **los 7 archivos juntos**, en la misma carpeta (la raíz del repositorio).

---

## Paso 1 — Crear el repositorio en GitHub

1. Entra en https://github.com y pulsa **New repository**.
2. Nombre: por ejemplo `lector` (puede ser privado o público; para GitHub Pages
   gratuito en cuenta personal, ponlo **público**).
3. Crea el repo (sin README, da igual).

## Paso 2 — Subir los archivos

Opción fácil (sin Git, desde el navegador):
1. En el repo recién creado, pulsa **Add file → Upload files**.
2. Arrastra los **7 archivos** de esta carpeta (no la carpeta, los archivos sueltos).
3. **Commit changes**.

## Paso 3 — Activar GitHub Pages

1. En el repo: **Settings → Pages**.
2. En **Source**, elige **Deploy from a branch**.
3. Branch: **main**, carpeta: **/ (root)**. **Save**.
4. Espera 1-2 minutos. Aparecerá la URL arriba:
   `https://TU_USUARIO.github.io/lector/`

Ábrela en el ordenador para comprobar que carga (la primera vez tarda un par de
segundos porque descarga React y las fuentes; luego queda en caché).

## Paso 4 — Instalar en el iPhone

1. Abre esa misma URL **en Safari** (tiene que ser Safari, no Chrome).
2. Pulsa el botón **Compartir** (el cuadrado con la flecha hacia arriba).
3. Baja y pulsa **Añadir a pantalla de inicio**.
4. Confirma. Ya tienes el icono de **Cadence** en tu pantalla.

Al abrirlo desde el icono se ve a pantalla completa, sin barra de Safari, como una
app normal. Funciona sin conexión una vez cargada la primera vez.

---

## Notas

- **Tus datos** (progreso, biblioteca, métricas, calibraciones) se guardan **solo en
  tu iPhone**, en el almacenamiento del navegador. No se suben a ningún sitio. Si
  borras los datos de Safari para ese sitio, se pierden.
- **PDF**: la primera vez que abras un PDF, descarga el motor de lectura (necesita
  conexión esa primera vez). Después queda cacheado.
- **Exportar a Obsidian**: el botón ".md" descarga un archivo Markdown. En iOS, al
  descargarlo puedes elegir **Guardar en Archivos** y ponerlo en tu carpeta de
  Obsidian, o abrirlo directamente con Obsidian si lo tienes instalado.
- **Vibración (haptics)**: Safari en iOS no soporta vibración web, así que esa parte
  no hará nada en iPhone (sí en Android). El resto funciona igual.
- **Actualizar la app**: si en el futuro cambias el código, vuelve a subir el
  `index.html` al repo. En el iPhone, cierra la app del todo y vuelve a abrirla;
  el service worker bajará la versión nueva (puede requerir abrir un par de veces).

## Si algo no carga

- Asegúrate de que los 7 archivos están en la **raíz** del repo, no dentro de una
  subcarpeta.
- La URL debe terminar en `/` o en `/index.html`.
- Dale 2 minutos tras activar Pages; a veces tarda en publicar.

## Novedades de esta versión

- **Modo audio (voz)**: interruptor abajo para alternar entre lectura visual RSVP y
  escucha por voz. Velocidad de x1 a x2 en pasos de 0,1. La palabra se resalta siguiendo
  a la voz. Usa la voz del sistema (gratis, offline). En iPhone, descarga una voz española
  "(Mejorada)" en Ajustes → Accesibilidad → Contenido hablado → Voces → Español para
  mejor calidad.
- **Icono nuevo** (ojo con punto de foco dorado).
