# 📱 Breakpoints - Responsive Design

Documentación completa de los puntos de quiebre (breakpoints) para mantener la vista móvil en todos los dispositivos.

---

## 🎯 Concepto Principal

La aplicación mantiene un **ancho máximo de 480px** en todos los dispositivos, simulando una vista de aplicación móvil incluso en pantallas grandes como PC o monitores 4K.

```css
#app {
    max-width: 480px; /* Ancho máximo tipo móvil */
    margin: 0 auto;   /* Centrado horizontal */
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.8); /* Sombra para efecto frame */
}
```

---

## 📏 Tabla de Breakpoints

| Rango | Dispositivos | Ancho #app | Comportamiento |
|-------|-------------|-----------|----------------|
| **0px - 374px** | Mobile Small | 100% | Ocupa todo el ancho |
| **375px - 424px** | iPhone SE, 12/13/14 | 100% | Ocupa todo el ancho |
| **425px - 767px** | Mobile Large | 100% | Ocupa todo el ancho |
| **768px - 1023px** | Tablets | 480px | Vista móvil centrada |
| **1024px - 1439px** | Laptops | 480px | Vista móvil centrada |
| **1440px - 1919px** | Monitores estándar | 480px | Vista móvil centrada |
| **1920px+** | Monitores grandes, 4K | 480px | Vista móvil centrada |

---

## 📱 Breakpoints Detallados

### 1. Mobile Small (320px - 374px)
**Dispositivos:**
- iPhone SE (1ra generación)
- Teléfonos Android pequeños
- Galaxy Fold (plegado)

**CSS:**
```css
@media (max-width: 374px) {
    #app {
        max-width: 100%;
    }
}
```

**Comportamiento:**
- Ocupa el 100% del ancho disponible
- Sin márgenes laterales
- Optimizado para pantallas pequeñas

---

### 2. Mobile Medium (375px - 424px)
**Dispositivos:**
- iPhone SE (2da/3ra generación): 375x667px
- iPhone 12/13/14 estándar: 390x844px
- iPhone 11: 414x896px
- Pixel 5: 393x851px

**CSS:**
```css
@media (min-width: 375px) and (max-width: 424px) {
    #app {
        max-width: 100%;
    }
}
```

**Comportamiento:**
- Ocupa el 100% del ancho
- Vista nativa móvil
- Experiencia optimizada para iOS y Android

---

### 3. Mobile Large (425px - 767px)
**Dispositivos:**
- iPhone 14 Pro Max: 430x932px
- iPhone Plus: 414x736px
- Samsung Galaxy S21+: 412x915px
- Pixel 6 Pro: 412x892px

**CSS:**
```css
@media (min-width: 425px) and (max-width: 767px) {
    #app {
        max-width: 100%;
    }
}
```

**Comportamiento:**
- Ocupa el 100% del ancho
- Aprovecha pantallas grandes de móviles
- Sin frame lateral

---

### 4. Tablet (768px - 1023px)
**Dispositivos:**
- iPad (768x1024px)
- iPad Mini: 768x1024px
- Samsung Galaxy Tab: 800x1280px
- Tablets Android 10"

**CSS:**
```css
@media (min-width: 768px) and (max-width: 1023px) {
    #app {
        max-width: 480px; /* ← Vista móvil */
    }

    body {
        background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
    }
}
```

**Comportamiento:**
- **IMPORTANTE:** Se limita a 480px (vista móvil)
- Centrado en la pantalla
- Fondo degradado en los laterales
- Efecto de "app móvil en tablet"

---

### 5. Desktop Small (1024px - 1439px)
**Dispositivos:**
- MacBook Air 13": 1440x900px
- Laptops estándar: 1366x768px
- Chromebooks: 1280x720px
- Monitores 13-15"

**CSS:**
```css
@media (min-width: 1024px) and (max-width: 1439px) {
    #app {
        max-width: 480px; /* ← Vista móvil */
    }

    body {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
    }
}
```

**Comportamiento:**
- **Vista móvil forzada a 480px**
- Centrado perfectamente
- Degradado diagonal en los laterales
- Experiencia de "app móvil en laptop"

---

### 6. Desktop Medium (1440px - 1919px)
**Dispositivos:**
- MacBook Pro 16": 1728x1117px
- iMac 21.5": 1920x1080px
- Monitores Full HD: 1920x1080px
- Monitores QHD: 2560x1440px

**CSS:**
```css
@media (min-width: 1440px) and (max-width: 1919px) {
    #app {
        max-width: 480px; /* ← Vista móvil */
    }

    body {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
    }
}
```

**Comportamiento:**
- **Vista móvil estricta a 480px**
- Grandes márgenes laterales
- Degradado elegante
- Enfoque en la app centrada

---

### 7. Desktop Large (1920px+)
**Dispositivos:**
- iMac 27": 2560x1440px
- Monitores 4K: 3840x2160px
- Monitores 5K: 5120x2880px
- Monitores ultrawide: 3440x1440px

**CSS:**
```css
@media (min-width: 1920px) {
    #app {
        max-width: 480px; /* ← Vista móvil */
    }

    body {
        background: radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 70%);
    }
}
```

**Comportamiento:**
- **Vista móvil 480px siempre**
- Degradado radial elegante
- App perfectamente centrada
- Experiencia premium en pantallas grandes

---

## 🔄 Orientación Landscape (Horizontal)

### Mobile Landscape
```css
@media (max-height: 500px) and (orientation: landscape) {
    #app {
        max-width: 480px;
    }
}
```

**Cuándo se activa:**
- Móvil girado horizontalmente
- Altura menor a 500px

**Comportamiento:**
- Mantiene los 480px de ancho
- Evita que se expanda horizontalmente

---

## 📱 Dispositivos Específicos

### iPhone SE (375x667)
```css
@media only screen
    and (device-width: 375px)
    and (device-height: 667px)
    and (-webkit-device-pixel-ratio: 2) {
    #app {
        max-width: 100%;
    }
}
```

### iPhone 12/13/14 (390x844)
```css
@media only screen
    and (device-width: 390px)
    and (device-height: 844px)
    and (-webkit-device-pixel-ratio: 3) {
    #app {
        max-width: 100%;
    }
}
```

### iPhone 14 Pro Max (430x932)
```css
@media only screen
    and (device-width: 430px)
    and (device-height: 932px)
    and (-webkit-device-pixel-ratio: 3) {
    #app {
        max-width: 100%;
    }
}
```

### iPad (768x1024)
```css
@media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px) {
    #app {
        max-width: 480px;
    }
}
```

---

## 🎨 Fondos por Breakpoint

| Breakpoint | Fondo |
|-----------|-------|
| Mobile (< 768px) | Negro sólido `#000000` |
| Tablet (768-1023px) | Degradado vertical |
| Desktop Small/Medium (1024-1919px) | Degradado diagonal 135° |
| Desktop Large (1920px+) | Degradado radial |

### Código de fondos:

```css
/* Tablet */
background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);

/* Desktop Small/Medium */
background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);

/* Desktop Large */
background: radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 70%);
```

---

## ♿ Accesibilidad

### Reduce Motion
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

**Cuándo se activa:**
- Usuario activa "Reducir movimiento" en el sistema operativo
- Personas con sensibilidad al movimiento
- Problemas vestibulares

**Comportamiento:**
- Elimina todas las animaciones
- Transiciones instantáneas
- Mejora la accesibilidad

---

## 🧪 Testing de Breakpoints

### Chrome DevTools
```
1. Abrir DevTools (F12)
2. Click en "Toggle device toolbar" (Ctrl+Shift+M)
3. Seleccionar dispositivo o dimensión personalizada
4. Verificar que #app = 480px en desktop
```

### Dimensiones de prueba recomendadas:
- **Mobile:** 375x667 (iPhone SE)
- **Mobile Large:** 414x896 (iPhone 11)
- **Tablet:** 768x1024 (iPad)
- **Laptop:** 1366x768
- **Desktop:** 1920x1080
- **4K:** 3840x2160

---

## 🔧 Modificar el Ancho Móvil

Si deseas cambiar el ancho de la vista móvil:

```css
/* Ubicación: src/css/style.css línea 39 */
#app {
    max-width: 480px; /* ← Cambiar este valor */
}
```

**Valores recomendados:**
- `375px` - Más estrecho (iPhone SE)
- `414px` - Estándar móvil grande
- `480px` - **Actual (recomendado)**
- `600px` - Más ancho (tablet pequeña)

**Ejemplo para 414px:**
```css
#app {
    max-width: 414px; /* iPhone 11 Pro Max width */
}
```

---

## 📊 Comparación Visual

```
┌─────────────────────────────────────────────────┐
│                    DESKTOP                       │
│  ┌─────────────┬──────────┬─────────────┐      │
│  │   Espacio   │   #app   │   Espacio   │      │
│  │   lateral   │  480px   │   lateral   │      │
│  │   gradiente │  móvil   │   gradiente │      │
│  └─────────────┴──────────┴─────────────┘      │
└─────────────────────────────────────────────────┘

┌──────────┐
│  MOBILE  │
│          │
│   #app   │
│  100%    │
│          │
└──────────┘
```

---

## 🚀 Ventajas de este Enfoque

### ✅ Pros:
1. **Consistencia:** Misma experiencia en todos los dispositivos
2. **Enfoque:** Usuario se concentra en el contenido central
3. **Elegancia:** Vista de app móvil en desktop se ve moderna
4. **Mantenimiento:** Un solo diseño para todos los tamaños
5. **Performance:** No requiere múltiples layouts

### ⚠️ Consideraciones:
1. No aprovecha el espacio completo en desktop
2. Puede parecer "vacío" en monitores muy grandes
3. Algunos usuarios esperan diseño full-width en PC

---

## 🎯 Casos de Uso Ideales

Este sistema de breakpoints es perfecto para:
- ✅ Portfolios personales
- ✅ Landing pages tipo Linktree
- ✅ Bio links
- ✅ Páginas de perfil
- ✅ Apps con contenido vertical (feeds, stories)
- ✅ Micrositios

**No recomendado para:**
- ❌ Dashboards con múltiples columnas
- ❌ E-commerce con catálogos extensos
- ❌ Aplicaciones con tablas de datos
- ❌ CMS con paneles laterales

---

## 📝 Checklist de Testing

Al modificar breakpoints, verifica:

- [ ] Vista móvil (375px) - #app al 100%
- [ ] Mobile large (414px) - #app al 100%
- [ ] Tablet (768px) - #app limitado a 480px
- [ ] Laptop (1366px) - #app limitado a 480px
- [ ] Desktop (1920px) - #app limitado a 480px
- [ ] 4K (3840px) - #app limitado a 480px
- [ ] Landscape móvil - #app limitado a 480px
- [ ] Fondos degradados funcionan correctamente
- [ ] Centrado horizontal perfecto
- [ ] Sin scroll horizontal
- [ ] Sombras del frame visibles en desktop

---

## 🔗 Referencias

### Documentación CSS
- [MDN - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS Tricks - Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

### Herramientas de Testing
- [Responsive Viewer (Chrome)](https://chrome.google.com/webstore/detail/responsive-viewer)
- [BrowserStack](https://www.browserstack.com/)
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)

### Resoluciones Comunes
- [Screen Sizes](https://screensiz.es/)
- [Device Metrics](https://material.io/resources/devices/)

---

## 📞 Soporte

Si tienes dudas sobre los breakpoints:

1. Revisa este documento
2. Inspecciona con DevTools (F12)
3. Verifica `src/css/style.css` líneas 87-221
4. Consulta la consola del navegador

---

**Última actualización:** Noviembre 2024
**Versión:** 1.0.0
**Autor:** Sebastian Morales Aroca
