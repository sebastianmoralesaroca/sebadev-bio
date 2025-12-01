# 📱 Breakpoints - Resumen Rápido

## 🎯 Concepto
La app **SIEMPRE** se ve como móvil (480px máximo), incluso en PC.

---

## 📏 Tabla Simple

| Dispositivo | Ancho de #app | ¿Se ve móvil? |
|------------|---------------|---------------|
| 📱 Mobile (< 768px) | 100% del ancho | ✅ SÍ |
| 📱 Tablet (768-1023px) | 480px centrado | ✅ SÍ |
| 💻 Laptop (1024-1439px) | 480px centrado | ✅ SÍ |
| 🖥️ Desktop (1440-1919px) | 480px centrado | ✅ SÍ |
| 🖥️ 4K (1920px+) | 480px centrado | ✅ SÍ |

---

## 🎨 Visualización

### En Móvil (iPhone)
```
┌──────────┐
│   App    │
│  100%    │ ← Ocupa toda la pantalla
│          │
└──────────┘
```

### En PC/Laptop
```
┌─────────────────────────────────────┐
│         │         │         │        │
│  Fondo  │   App   │  Fondo │        │ ← App centrada
│ lateral │  480px  │ lateral│        │
│         │         │         │        │
└─────────────────────────────────────┘
```

---

## 🔧 Cambiar el Ancho Móvil

**Archivo:** `src/css/style.css`
**Línea:** 39

```css
#app {
    max-width: 480px; /* ← Cambiar aquí */
}
```

**Opciones:**
- `375px` - iPhone SE (más estrecho)
- `414px` - iPhone 11 Pro Max
- `480px` - **Actual (recomendado)** ✅
- `600px` - Más ancho

---

## 🧪 Probar Rápidamente

### Chrome DevTools
1. Presiona `F12`
2. Presiona `Ctrl + Shift + M`
3. Prueba diferentes tamaños:
   - 375x667 (iPhone SE)
   - 414x896 (iPhone 11)
   - 1920x1080 (Desktop)

**Resultado esperado:**
En desktop debe verse una app de 480px centrada con espacio lateral.

---

## ✅ Checklist Rápido

- [ ] ¿En móvil ocupa todo el ancho? ✅
- [ ] ¿En tablet se centra a 480px? ✅
- [ ] ¿En desktop se centra a 480px? ✅
- [ ] ¿Hay fondos laterales en PC? ✅
- [ ] ¿No hay scroll horizontal? ✅

---

## 📂 Archivos Modificados

1. **src/css/style.css**
   - Líneas 24-44: Body y #app
   - Líneas 87-221: Media queries

2. **BREAKPOINTS.md**
   - Documentación completa

---

## 🚀 Resultado Final

```
MÓVIL:      La app ocupa toda la pantalla (100%)
TABLET:     La app se centra en 480px
DESKTOP:    La app se centra en 480px (igual que tablet)
4K:         La app se centra en 480px (siempre móvil)
```

**Efecto visual:** Tu app se ve como una aplicación de teléfono incluso cuando la abres en una pantalla gigante de 4K. 📱➡️🖥️

---

**Ver documentación completa:** `BREAKPOINTS.md`
