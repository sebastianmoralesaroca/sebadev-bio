# 🚀 Bio Link - Landing Page Estilo Linktree

Página de biografía profesional tipo Linktree para desarrolladores, con diseño moderno, oscuro y minimalista.

## 📋 Características

- ✅ Diseño oscuro (dark mode nativo) estilo programador
- ✅ Responsive y mobile-first
- ✅ Animaciones suaves y efectos hover
- ✅ Paleta de colores cyan/turquesa neón
- ✅ Modular con JavaScript Vanilla
- ✅ Estilizado con Tailwind CSS
- ✅ Iconos de Font Awesome
- ✅ Cards clickeables para servicios/proyectos

## 🎨 Paleta de Colores

- **Fondo**: Negro (#000000)
- **Acento principal**: Cyan (#00D9FF)
- **Texto**: Blanco (#FFFFFF)
- **Secundario**: Gris (#9CA3AF)
- **Estados**:
  - Verde (#4ADE80) - Completado
  - Amarillo (#FACC15) - En desarrollo
  - Púrpura (#C084FC) - Próximamente

## 📁 Estructura del Proyecto

```
proyecto/
│
├── index.html          # Archivo HTML principal
├── script.js           # Orquestador principal
├── portada.js          # Sección hero con foto y RRSS
├── section1.js         # Servicios (card clickeable)
├── section2.js         # Último proyecto completado
├── section3.js         # Proyecto en desarrollo
├── section4.js         # Proyecto próximo
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**
- **JavaScript Vanilla** (ES6 Modules)
- **Tailwind CSS** (CDN)
- **Font Awesome** (iconos)
- **Google Fonts** (Inter)

## 🚀 Instalación y Uso

### Opción 1: Servidor Local Simple

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve
```

### Opción 2: Live Server (VS Code)

1. Instala la extensión "Live Server"
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 3: Navegador directo

Abre el archivo `index.html` directamente en tu navegador.

> ⚠️ **Nota**: Algunos navegadores pueden bloquear módulos ES6 por CORS. Se recomienda usar un servidor local.

## ✏️ Personalización

### 1. Información Personal (portada.js)

```javascript
// Cambiar nombre
<h1>TU NOMBRE AQUÍ</h1>

// Cambiar título/profesión
<p>Tu Título Profesional</p>

// Cambiar foto de perfil
<img src="URL_DE_TU_FOTO" />

// Actualizar enlaces de RRSS
href="https://github.com/TUUSUARIO"
href="https://linkedin.com/in/TUUSUARIO"
```

### 2. Imagen de Fondo

Cada sección tiene su propia imagen de fondo. Para cambiarlas:

```javascript
// En cualquier sectionX.js
<img src="TU_URL_DE_IMAGEN" alt="..." />
```

**Sitios recomendados para imágenes gratuitas:**
- [Unsplash](https://unsplash.com) (usado por defecto)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

### 3. Servicios (section1.js)

```javascript
// Cambiar título
<h2>TU SERVICIO</h2>

// Cambiar descripción
<p>Tu descripción personalizada...</p>

// Cambiar enlace
<a href="tu-pagina-servicios.html">
```

### 4. Proyectos (section2, 3, 4)

Para cada proyecto personaliza:

```javascript
// Título del proyecto
<h2>NOMBRE DEL PROYECTO</h2>

// Descripción
<p>Descripción del proyecto...</p>

// Tecnologías (badges)
<span>React</span>
<span>Node.js</span>
// Agrega o quita según necesites

// Enlace del proyecto
<a href="URL_DEL_PROYECTO">
```

### 5. Colores y Estilos

Los colores principales están en clases de Tailwind:

```javascript
// Acento cyan
bg-cyan-400
text-cyan-400
border-cyan-400

// Para cambiar el color principal, reemplaza "cyan" por:
// blue, purple, green, pink, etc.
```

### 6. Footer

Edita el footer en `script.js`:

```javascript
function createFooter() {
  // Actualiza email, GitHub, enlaces, etc.
}
```

## 🎯 Características de las Secciones

### Portada
- ✅ Imagen hero full screen
- ✅ Foto de perfil circular con borde neón
- ✅ Nombre y título profesional
- ✅ 5 iconos de RRSS clickeables
- ✅ Indicador "online"
- ✅ Animación de scroll down

### Section 1 - Servicios
- ✅ Card completamente clickeable
- ✅ Enlace a página de servicios
- ✅ Lista de servicios breves
- ✅ Badge de identificación
- ✅ Efecto hover con elevación

### Section 2 - Proyecto Completado
- ✅ Badge verde "Completado"
- ✅ Muestra tecnologías usadas
- ✅ Enlace a demo/repositorio
- ✅ Descripción detallada

### Section 3 - Proyecto en Desarrollo
- ✅ Badge amarillo "En Desarrollo" animado
- ✅ Tecnologías en uso
- ✅ Enlace a repositorio GitHub

### Section 4 - Proyecto Próximo
- ✅ Badge púrpura "Próximamente"
- ✅ Botón "Notificarme"
- ✅ Tecnologías planificadas

## 📱 Responsive Design

El diseño está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

El layout es mobile-first, con `max-w-md` centrado para mantener legibilidad.

## ⚡ Performance

- Imágenes optimizadas desde Unsplash (parámetro `?q=80`)
- CSS mínimo con Tailwind
- JavaScript modular y eficiente
- Sin dependencias pesadas

## 🔗 Enlaces Útiles

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Unsplash API](https://unsplash.com/developers)

## 📝 Notas Importantes

1. **Módulos ES6**: El proyecto usa `type="module"` en los scripts, lo que requiere un servidor para funcionar correctamente (no funciona con `file://`).

2. **CDN de Tailwind**: Se usa la versión CDN. Para producción, considera usar Tailwind CLI para optimizar el tamaño.

3. **Imágenes**: Las imágenes actuales son de demostración desde Unsplash. Reemplázalas con tus propias imágenes.

4. **SEO**: Actualiza las meta tags en `index.html` para mejor SEO:
   ```html
   <meta name="description" content="Tu descripción">
   <meta property="og:title" content="Tu nombre">
   ```

## 🚀 Próximos Pasos

- [ ] Agregar página de servicios separada
- [ ] Implementar formulario de contacto
- [ ] Agregar modo light/dark toggle
- [ ] Integrar analytics
- [ ] Agregar animaciones con GSAP
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo.

---

**Creado con ❤️ usando JavaScript Vanilla + Tailwind CSS**