# CHECKLIST QA / PRE-DEPLOY
## Proyecto VW Sevilla Utrewal

---

## ✅ 1. SEO (Search Engine Optimization)

### Meta Tags
- [ ] Cada página tiene `<title>` único y descriptivo (max 60 caracteres)
- [ ] Cada página tiene `<meta name="description">` único (max 160 caracteres)
- [ ] Meta keywords relevantes (opcional, menor importancia)
- [ ] `<meta name="viewport">` presente para responsive
- [ ] `<meta charset="UTF-8">` presente
- [ ] Open Graph tags para redes sociales (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`)

### Estructura
- [ ] Una sola etiqueta `<h1>` por página
- [ ] Jerarquía correcta de headings (h1 > h2 > h3)
- [ ] URLs amigables y descriptivas
- [ ] Canonical URL definida
- [ ] Sitemap.xml generado y accesible
- [ ] Robots.txt configurado correctamente
- [ ] Breadcrumbs implementados en páginas internas

### Contenido
- [ ] Alt text en TODAS las imágenes
- [ ] Enlaces internos funcionando
- [ ] Enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`
- [ ] Sin contenido duplicado
- [ ] Texto legible (sin keyword stuffing)

---

## ✅ 2. ACCESIBILIDAD (WCAG 2.1 AA)

### Contraste y Color
- [ ] Contraste mínimo 4.5:1 para texto normal
- [ ] Contraste mínimo 3:1 para texto grande (>18px bold o >24px)
- [ ] La información no depende solo del color
- [ ] Variables CSS garantizan contraste adecuado

### Navegación por Teclado
- [ ] Todos los elementos interactivos accesibles con Tab
- [ ] Orden de tabulación lógico
- [ ] Focus visible en todos los elementos
- [ ] Skip links implementados
- [ ] Menú móvil navegable por teclado

### ARIA y Semántica
- [ ] Landmarks correctos (`<header>`, `<main>`, `<nav>`, `<footer>`)
- [ ] `aria-label` en botones sin texto visible
- [ ] `aria-expanded` en menús desplegables
- [ ] `aria-live` en contenido dinámico (slider)
- [ ] `role="dialog"` y `aria-modal` en modales
- [ ] Formularios con labels asociados correctamente

### Widget de Accesibilidad
- [ ] Control de tamaño de fuente funcional
- [ ] Modo alto contraste funcional
- [ ] Reducir animaciones funcional
- [ ] Preferencias persistentes en localStorage
- [ ] Respeta `prefers-reduced-motion` del sistema

### Formularios
- [ ] Labels visibles o `aria-label`
- [ ] Mensajes de error accesibles
- [ ] Campos requeridos indicados (`required`, `aria-required`)
- [ ] Agrupación lógica de campos (`fieldset`, `legend`)

---

## ✅ 3. PERFORMANCE

### Imágenes
- [ ] Imágenes optimizadas (compresión)
- [ ] Formato WebP con fallback PNG/JPG
- [ ] `loading="lazy"` en imágenes below-the-fold
- [ ] Tamaños responsivos con `srcset`
- [ ] Width y height definidos para evitar CLS

### CSS
- [ ] CSS crítico inline en `<head>`
- [ ] CSS no crítico cargado de forma diferida
- [ ] Sin CSS no utilizado
- [ ] Minificación en producción

### JavaScript
- [ ] Scripts con `defer` o al final del `<body>`
- [ ] Sin JavaScript bloqueante
- [ ] Código modular y tree-shaking ready
- [ ] Minificación en producción

### Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] TTFB (Time to First Byte) < 600ms

### Caching
- [ ] Headers de cache configurados
- [ ] Service Worker (opcional)
- [ ] Assets versionados para cache busting

---

## ✅ 4. FUNCIONALIDAD

### Navegación
- [ ] Menú principal funciona en desktop
- [ ] Menú hamburger funciona en móvil
- [ ] Todos los enlaces internos funcionan
- [ ] Enlaces externos abren en nueva pestaña
- [ ] Breadcrumbs correctos
- [ ] Scroll to top funcional

### Slider Hero
- [ ] Autoplay funciona
- [ ] Navegación manual (flechas/dots) funciona
- [ ] Pausa en hover/focus
- [ ] Transiciones suaves
- [ ] Responsive

### Formularios
- [ ] Validación client-side funciona
- [ ] Mensajes de error claros
- [ ] Submit simula correctamente
- [ ] Campos de fecha no permiten fechas pasadas
- [ ] Checkboxes de privacidad obligatorios

### Filtros (coches-nuevos.html)
- [ ] Filtro por categoría funciona
- [ ] Filtro por combustible funciona
- [ ] Filtro por precio funciona
- [ ] Combinación de filtros funciona
- [ ] Resetear filtros funciona

### Cookies Banner
- [ ] Aparece en primera visita
- [ ] Botón aceptar funciona
- [ ] Preferencia guardada en localStorage
- [ ] No aparece tras aceptar

---

## ✅ 5. CROSS-BROWSER

### Desktop
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (última versión)
- [ ] Edge (última versión)

### Mobile
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)
- [ ] Samsung Internet

### Responsive Breakpoints
- [ ] 320px (móvil pequeño)
- [ ] 375px (móvil estándar)
- [ ] 768px (tablet)
- [ ] 1024px (tablet horizontal / laptop)
- [ ] 1280px (desktop)
- [ ] 1920px (desktop grande)

---

## ✅ 6. CONTENIDO Y DATOS

### Información de Contacto
- [ ] Teléfonos correctos (Utrera y Alcalá)
- [ ] Emails correctos
- [ ] Direcciones correctas
- [ ] Horarios correctos (si aplica)

### Redes Sociales
- [ ] Facebook: https://www.facebook.com/UtrewalSevilla ✓
- [ ] Instagram: https://www.instagram.com/utrewal_sa ✓
- [ ] Twitter/X: https://twitter.com/utrewal_sa ✓
- [ ] WhatsApp: https://wa.me/34622309997 ✓

### Precios
- [ ] Polo: 16.900€ ✓
- [ ] Golf: 25.480€ ✓
- [ ] T-Cross: 20.300€ ✓
- [ ] Taigo: 19.900€ ✓
- [ ] T-Roc: 23.700€ ✓
- [ ] Tiguan: 34.300€ ✓
- [ ] Passat: 43.200€ ✓
- [ ] Arteon: 54.800€ ✓
- [ ] ID.3: 28.500€ ✓
- [ ] ID.4: 34.400€ ✓
- [ ] ID.7: 58.470€ ✓
- [ ] Nota legal de precios visible ✓

### Assets
- [ ] Todas las imágenes de vehículos cargan
- [ ] Logo VW visible en header y footer
- [ ] Iconos Font Awesome cargan
- [ ] Fuente Inter carga correctamente

---

## ✅ 7. SEGURIDAD

- [ ] HTTPS configurado (para producción)
- [ ] Headers de seguridad configurados
- [ ] Formularios con protección CSRF (si hay backend)
- [ ] Sin información sensible en frontend
- [ ] Enlaces externos con `rel="noopener noreferrer"`

---

## ✅ 8. LEGAL

- [ ] Aviso legal presente o enlazado
- [ ] Política de privacidad presente o enlazada
- [ ] Política de cookies presente o enlazada
- [ ] Checkboxes de consentimiento en formularios
- [ ] Nota legal de precios visible
- [ ] Copyright actualizado (2024)

---

## 🔴 PENDIENTE_VERIFICAR (Datos que faltan en contexto)

| Campo                  | Modelo/Sección    | Acción Requerida                    |
|------------------------|-------------------|-------------------------------------|
| Potencia (CV) exacta   | Todos los modelos | Verificar con ficha técnica oficial |
| Consumo                | Todos los modelos | Verificar con ficha técnica oficial |
| Emisiones CO2          | Modelos gasolina  | Verificar con ficha técnica oficial |
| Horarios de apertura   | Ambos concesionarios | Confirmar con cliente            |
| Coordenadas GPS        | Mapas             | Verificar e integrar Google Maps   |
| Stock de ocasión       | Das WeltAuto      | Conectar con sistema real          |
| Fechas promociones     | Ofertas           | Confirmar validez                  |

---

## 📝 NOTAS DE REVISIÓN

```
Fecha de revisión: _______________
Revisor: ________________________
Versión: ________________________

Comentarios:
_________________________________
_________________________________
_________________________________

Estado: [ ] Aprobado para producción
        [ ] Requiere cambios (ver comentarios)
```

---

Documento generado: 12/12/2024
Versión: 1.0
