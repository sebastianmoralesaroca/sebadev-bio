# 🚀 Bio Link - Landing Page Personal Estilo Linktree

Página de biografía profesional tipo Linktree para desarrolladores, con diseño moderno, oscuro y minimalista. Creada con JavaScript Vanilla y Tailwind CSS.

---

## 📋 Características Principales

- ✅ Diseño oscuro (dark mode nativo) estilo desarrollador
- ✅ Responsive y mobile-first
- ✅ Animaciones suaves con transiciones CSS
- ✅ Cards con imágenes de fondo y overlay oscuro
- ✅ Links clickeables a proyectos y redes sociales
- ✅ Paleta de colores cyan/turquesa neón
- ✅ Arquitectura modular con JavaScript ES6
- ✅ Estilizado con Tailwind CSS
- ✅ Iconos de Font Awesome 6
- ✅ Performance optimizado

---

## 🎨 Paleta de Colores

```css
/* Colores principales */
--dark-bg: #000000          /* Fondo principal */
--primary-color: #0ea5e9    /* Cyan principal */
--accent-color: #22d3ee     /* Cyan acento */
--cyan-glow: rgba(0, 217, 255, 0.5)  /* Efecto glow */

/* Texto */
--text-white: #FFFFFF       /* Títulos */
--text-gray: #9CA3AF        /* Descripciones */
```

**Esquema visual:**
- **Fondo**: Negro absoluto (#000000)
- **Bordes**: Cyan (#22d3ee)
- **Hover**: Gris semi-transparente
- **Texto**: Blanco/Gris claro

---

## 📁 Estructura del Proyecto

```
linktree/
│
├── src/
│   ├── index.html              # HTML principal
│   ├── css/
│   │   └── style.css           # Estilos personalizados y variables
│   ├── js/
│   │   ├── script.js           # Punto de entrada y orquestador
│   │   ├── header.js           # Header con imagen de fondo
│   │   ├── portada.js          # Sección hero con perfil y RRSS
│   │   └── section.js          # Cards de proyectos/servicios
│   └── tailwind.config.js      # Configuración de Tailwind
│
├── public/
│   ├── services.jpeg           # Fondo card: Servicios & Trabajos
│   ├── menu.jpeg               # Fondo card: Bnn Menu
│   ├── bnn1.jpeg               # Fondo card: Bnn Web
│   ├── code.jpeg               # Fondo card: CV
│   └── github.jpeg             # Fondo card: GitHub
│
├── node_modules/               # Dependencias (ignorado en git)
├── package.json                # Configuración de npm
├── package-lock.json           # Lock de dependencias
├── .gitignore                  # Archivos ignorados por Git
└── README.md                   # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **JavaScript Vanilla (ES6+)** - Módulos, arrow functions, template literals
- **Tailwind CSS** - Framework de utilidades CSS (CDN)
- **CSS3 Custom** - Variables CSS y animaciones personalizadas

### Tipografía e Iconos
- **Google Fonts** - Ubuntu (variable weights)
- **Font Awesome 6.4.0** - Iconos de redes sociales

### Herramientas de Desarrollo
- **Node.js** - Entorno de ejecución
- **npm** - Gestor de paquetes
- **Git** - Control de versiones

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- Git

### Clonar el Repositorio

```bash
git clone https://github.com/sebastianmoralesaroca/linktree.git
cd linktree
```

### Instalar Dependencias

```bash
npm install
```

### Ejecutar en Desarrollo

#### Opción 1: Servidor Local con Python

```bash
cd src
python -m http.server 8000
# Abre: http://localhost:8000
```

#### Opción 2: Node.js con npx

```bash
npx serve src
# Sigue la URL que aparece en consola
```

#### Opción 3: Live Server (VS Code)

1. Instala la extensión "Live Server"
2. Abre `src/index.html`
3. Click derecho → "Open with Live Server"

#### Opción 4: Navegador directo

```bash
# Abre directamente en navegador (puede tener limitaciones CORS)
open src/index.html  # macOS
xdg-open src/index.html  # Linux
start src/index.html  # Windows
```

> ⚠️ **Nota importante**: El proyecto usa módulos ES6 (`type="module"`), por lo que se recomienda usar un servidor local para evitar errores de CORS.

---

## 📱 Componentes del Proyecto

### 1. Header (`header.js`)
- Imagen de fondo full-width
- Diseño adaptativo
- Capa de degradado oscuro

### 2. Portada (`portada.js`)
- Nombre del desarrollador (H1)
- Subtítulo profesional
- 3 botones de redes sociales:
  - LinkedIn: https://www.linkedin.com/in/sebastian-cmoralesaroca-110940179/
  - Instagram: https://www.instagram.com/seba.devs/
  - TikTok: https://www.tiktok.com/@sebadevs
- Flecha animada de scroll down
- Gradiente de transición

### 3. Cards de Proyectos (`section.js`)

Cada card incluye:
- Imagen de fondo con overlay oscuro (70% opacidad)
- Título del proyecto
- Descripción breve
- Link clickeable a URL específica
- Efectos hover con transiciones

#### Cards implementadas:

1. **Servicios & Trabajos**
   - URL: https://sebadev123.netlify.app/
   - Imagen: `services.jpeg`
   - Muestra portafolio de trabajos

2. **Founder Bnn Menu**
   - URL: (pendiente)
   - Imagen: `menu.jpeg`
   - Menú digital para restaurantes

3. **Founder Bnn Web**
   - URL: (pendiente)
   - Imagen: `bnn1.jpeg`
   - Agencia de desarrollo web

4. **CV**
   - URL: #
   - Imagen: `code.jpeg`
   - Currículum vitae

5. **GitHub**
   - URL: https://github.com/sebastianmoralesaroca
   - Imagen: `github.jpeg`
   - Repositorios y código fuente

---

## ✏️ Personalización

### 1. Cambiar Información Personal

Edita `src/js/portada.js`:

```javascript
// Línea 17-19: Nombre
<h1 class="text-6xl font-black text-white tracking-tight uppercase mb-4">
    TU NOMBRE AQUÍ
</h1>

// Línea 22-25: Título profesional
<p class="text-cyan-400 max-w-lg mb-8 text-base leading-relaxed">
    Tu Título | Tu Especialidad<br>
    Tus Habilidades
</p>

// Línea 30-51: Enlaces de redes sociales
<a href="TU_LINKEDIN" target="_blank">...</a>
<a href="TU_INSTAGRAM" target="_blank">...</a>
<a href="TU_TIKTOK" target="_blank">...</a>
```

### 2. Modificar Cards de Proyectos

Edita `src/js/section.js`:

```javascript
// Cada card sigue esta estructura:
<a href="URL_DEL_PROYECTO" target="_blank" class="...">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 bg-cover bg-center"
         style="background-image: url('/public/TU_IMAGEN.jpg')">
    </div>

    <!-- Overlay oscuro (ajusta opacidad con bg-black/XX) -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Contenido -->
    <div class="relative z-10 text-center">
        <h3>TÍTULO DEL PROYECTO</h3>
        <p>Descripción del proyecto...</p>
    </div>
</a>
```

**Ajustar opacidad del overlay:**
- `bg-black/50` - Más claro (50%)
- `bg-black/70` - Actual (70%)
- `bg-black/80` - Más oscuro (80%)

### 3. Cambiar Imágenes de Fondo

1. Coloca tus imágenes en `/public/`
2. Actualiza la ruta en cada card:

```javascript
style="background-image: url('/public/TU_NUEVA_IMAGEN.jpg')"
```

**Formatos recomendados:**
- JPEG para fotos (compresión eficiente)
- PNG para imágenes con transparencia
- Tamaño recomendado: 1920x1080px o menor
- Peso máximo: 500KB por imagen

### 4. Personalizar Colores

#### Opción A: Cambiar Variables CSS

Edita `src/css/style.css`:

```css
:root {
    --primary-color: #0ea5e9;     /* Cyan → Cambia por tu color */
    --accent-color: #22d3ee;      /* Cyan claro */
    --dark-bg: #000000;           /* Negro */
    --cyan-glow: rgba(0, 217, 255, 0.5);  /* Glow */
}
```

#### Opción B: Cambiar Clases Tailwind

Reemplaza `cyan` por otro color:
- `text-cyan-400` → `text-blue-400`
- `bg-cyan-400` → `bg-purple-400`
- `border-cyan-400` → `border-green-400`

**Colores disponibles en Tailwind:**
- `blue`, `purple`, `pink`, `red`, `orange`, `yellow`, `green`, `teal`, `indigo`

---

## 🎯 Características Técnicas

### Arquitectura Modular

```javascript
// script.js - Orquestador principal
import { createHeader } from './header.js';
import { createPortada } from './portada.js';
import { createSection } from './section.js';

// Montaje de componentes
app.appendChild(createHeader());
app.appendChild(createPortada());
app.appendChild(createSection());
```

### Efectos y Animaciones

#### Hover en Cards
```css
.hover:bg-gray-900/30    /* Fondo gris semi-transparente */
.transition-all          /* Transición suave */
.duration-300            /* 300ms de duración */
```

#### Animación de Scroll Down
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
```

#### Hover en Iconos Sociales
```css
.social-icon:hover {
    transform: scale(1.15);
    box-shadow: 0 0 20px var(--cyan-glow);
}
```

### Posicionamiento Avanzado

- **Z-index layers**: Header (10) → Portada (10) → Section (10)
- **Negative margins**: `marginTop: '-500px'` para superposición
- **Absolute positioning**: Overlay de imágenes con `inset-0`

---

## 📱 Diseño Responsive

### Breakpoints de Tailwind

| Dispositivo | Ancho | Clases |
|------------|-------|---------|
| Móvil      | 320px+ | Base (sin prefijo) |
| Tablet     | 768px+ | `md:` |
| Desktop    | 1024px+ | `lg:` |
| Desktop XL | 1280px+ | `xl:` |

### Estrategia Mobile-First

```css
/* Móvil (base) */
.text-4xl      /* Texto grande */
.p-6           /* Padding moderado */

/* Tablet y superior */
.md:text-6xl   /* Texto más grande */
.md:p-8        /* Más padding */
```

### Contenedores Responsivos

```html
<div class="max-w-4xl mx-auto">  <!-- Ancho máximo centrado -->
<div class="w-full min-h-screen"> <!-- Full width, altura mínima -->
```

---

## ⚡ Optimización y Performance

### Imágenes
- ✅ Formato JPEG para fotos
- ✅ Compresión moderada (calidad 80-90%)
- ✅ Lazy loading nativo: `loading="lazy"`
- ✅ Dimensiones optimizadas (max 1920px)

### CSS
- ✅ Tailwind CDN (para desarrollo rápido)
- ✅ CSS custom minimalizado
- ✅ Variables CSS para reutilización

### JavaScript
- ✅ Módulos ES6 para code splitting
- ✅ Sin dependencias pesadas
- ✅ Vanilla JS puro (sin frameworks)

### Mejoras Recomendadas para Producción

```bash
# 1. Compilar Tailwind (reduce tamaño CSS)
npm install -D tailwindcss
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --minify

# 2. Minificar JavaScript
npm install -D terser
npx terser src/js/*.js --compress --mangle -o dist/bundle.min.js

# 3. Optimizar imágenes
npm install -D imagemin-cli
npx imagemin public/*.jpg --out-dir=dist/public
```

---

## 🔒 Seguridad - Archivos Ignorados (.gitignore)

El proyecto incluye un `.gitignore` completo que protege:

### 🔑 Credenciales y Llaves SSH
- Llaves privadas: `*.pem`, `*.key`, `id_rsa`, etc.
- Certificados: `*.crt`, `*.cer`, `*.p12`
- **Llaves específicas del proyecto**: `GEMI`, `gemi1234` (y sus `.pub`)

### 🌍 Variables de Entorno
- `.env`, `.env.local`, `.env.production`
- `config.json`, `secrets.json`
- Credenciales de Firebase, AWS, etc.

### 📦 Dependencias
- `node_modules/`
- Logs de npm/yarn/pnpm

### 💻 Archivos del Sistema
- macOS: `.DS_Store`
- Windows: `Thumbs.db`
- Linux: `*~`

### ⚠️ IMPORTANTE
**NUNCA** subas a Git:
- Llaves SSH privadas
- Tokens de API
- Contraseñas
- Archivos `.env`

Si accidentalmente commiteaste archivos sensibles:
```bash
# Eliminar del historial
git rm --cached ARCHIVO_SENSIBLE
git commit -m "Remove sensitive file"

# Considera cambiar las credenciales expuestas
```

---

## 🌐 Deploy y Hosting

### Netlify (Recomendado)

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
cd src
netlify deploy --prod
```

**Configuración `netlify.toml`:**
```toml
[build]
  publish = "src"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Deploy
vercel --prod
```

### GitHub Pages

```bash
# 1. Crear rama gh-pages
git checkout -b gh-pages

# 2. Mover archivos de src/ a raíz
mv src/* .

# 3. Push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# 4. Activar en: Settings → Pages → Branch: gh-pages
```

---

## 🧪 Testing

### Checklist Manual

- [ ] Todos los links funcionan correctamente
- [ ] Imágenes cargan sin errores
- [ ] Responsive en móvil (320px+)
- [ ] Responsive en tablet (768px+)
- [ ] Responsive en desktop (1024px+)
- [ ] Animaciones fluidas (60fps)
- [ ] Sin errores en consola
- [ ] Funciona sin conexión a internet (después de primera carga)

### Herramientas de Testing

```bash
# Lighthouse (Performance, SEO, Accessibility)
npx lighthouse http://localhost:8000 --view

# Validar HTML
npx html-validate src/index.html

# Validar accesibilidad
npx pa11y http://localhost:8000
```

---

## 🐛 Troubleshooting

### Error: "CORS policy blocked"
**Causa**: Ejecutar `index.html` directamente sin servidor
**Solución**: Usa un servidor local (Python, npx serve, Live Server)

### Error: "Failed to load module script"
**Causa**: Módulos ES6 requieren servidor
**Solución**: No uses `file://`, siempre usa `http://localhost`

### Imágenes no cargan
**Causa**: Ruta incorrecta
**Solución**: Verifica que las imágenes estén en `/public/` y las rutas sean correctas

### Estilos de Tailwind no aplican
**Causa**: CDN bloqueado o clases incorrectas
**Solución**: Verifica la conexión a internet y consulta la documentación de Tailwind

---

## 📚 Recursos y Referencias

### Documentación Oficial
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)

### Herramientas Útiles
- [Unsplash](https://unsplash.com) - Imágenes gratuitas
- [TinyPNG](https://tinypng.com) - Comprimir imágenes
- [Can I Use](https://caniuse.com) - Compatibilidad de navegadores
- [Coolors](https://coolors.co) - Paletas de colores

### Inspiración
- [Linktree](https://linktr.ee)
- [Carrd](https://carrd.co)
- [Beacons](https://beacons.ai)

---

## 🤝 Contribuciones

Este es un proyecto personal, pero si deseas contribuir:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Add nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

**Puedes:**
- ✅ Usar para proyectos personales
- ✅ Usar para proyectos comerciales
- ✅ Modificar el código
- ✅ Distribuir

**Debes:**
- 📝 Incluir la licencia original
- 📝 Dar crédito al autor original (opcional pero apreciado)

---

## 👤 Autor

**Sebastian Morales Aroca**

- 🌐 Portfolio: [sebadev123.netlify.app](https://sebadev123.netlify.app/)
- 💼 LinkedIn: [sebastian-cmoralesaroca](https://www.linkedin.com/in/sebastian-cmoralesaroca-110940179/)
- 📷 Instagram: [@seba.devs](https://www.instagram.com/seba.devs/)
- 🎵 TikTok: [@sebadevs](https://www.tiktok.com/@sebadevs)
- 💻 GitHub: [@sebastianmoralesaroca](https://github.com/sebastianmoralesaroca)

---

## 🙏 Agradecimientos

- Tailwind CSS por el increíble framework
- Font Awesome por los iconos
- Unsplash por las imágenes de stock
- La comunidad de desarrolladores de código abierto

---

## 📝 Changelog

### v1.0.0 (2024-11-25)
- ✅ Estructura modular con ES6
- ✅ Header con imagen de fondo
- ✅ Portada con perfil y RRSS
- ✅ 5 cards de proyectos con imágenes
- ✅ Sistema de overlay oscuro
- ✅ Links funcionales
- ✅ Diseño responsive
- ✅ .gitignore completo
- ✅ Documentación README completa

---

**Creado con ❤️ usando JavaScript Vanilla + Tailwind CSS**

*Última actualización: Noviembre 2024*
