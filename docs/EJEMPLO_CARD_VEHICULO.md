# EJEMPLO DE CÓDIGO - CARD DE VEHÍCULO
## Volkswagen Sevilla Utrewal

Este documento contiene un ejemplo completo de cómo implementar una card de vehículo
siguiendo las directrices del proyecto, usando los datos exactos del contexto.

---

## 1. HTML SEMÁNTICO

```html
<!-- Card de Vehículo - Volkswagen Tiguan -->
<article class="vehicle-card" 
         data-category="suv" 
         data-fuel="gasolina,hibrido"
         data-price="34300"
         role="article"
         aria-labelledby="tiguan-title">
    
    <!-- Badge -->
    <div class="vehicle-badge new" aria-label="Modelo nuevo 2024">
        Nuevo 2024
    </div>
    
    <!-- Imagen -->
    <div class="vehicle-image">
        <img src="images/tiguan.png" 
             alt="Volkswagen Tiguan 2024 - SUV familiar" 
             loading="lazy"
             width="400"
             height="250">
    </div>
    
    <!-- Contenido -->
    <div class="vehicle-content">
        <h3 id="tiguan-title">Volkswagen Tiguan</h3>
        <p class="vehicle-tagline">El SUV más versátil</p>
        
        <!-- Especificaciones -->
        <div class="vehicle-specs" aria-label="Especificaciones del vehículo">
            <span>
                <i class="fas fa-gas-pump" aria-hidden="true"></i>
                <span class="sr-only">Combustible:</span> Gasolina / Híbrido PHEV
            </span>
            <span>
                <i class="fas fa-tachometer-alt" aria-hidden="true"></i>
                <span class="sr-only">Potencia:</span> 130-272 CV
            </span>
        </div>
        
        <!-- Precio -->
        <div class="vehicle-price">
            <span class="price-from">Desde</span>
            <span class="price-amount" aria-label="Precio desde 34.300 euros">34.300 €</span>
            <span class="price-note">*Con financiación</span>
        </div>
        
        <!-- Acciones -->
        <div class="vehicle-actions">
            <a href="index.html#contacto" 
               class="btn btn-primary"
               aria-label="Solicitar información sobre Volkswagen Tiguan">
                Solicitar información
            </a>
            <a href="prueba-conduccion.html" 
               class="btn btn-secondary"
               aria-label="Reservar prueba de conducción del Volkswagen Tiguan">
                Prueba de conducción
            </a>
            <a href="https://wa.me/34622309997?text=Hola,%20me%20interesa%20el%20Volkswagen%20Tiguan" 
               class="btn btn-whatsapp"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Contactar por WhatsApp sobre Volkswagen Tiguan">
                <i class="fab fa-whatsapp" aria-hidden="true"></i>
                <span class="sr-only">WhatsApp</span>
            </a>
        </div>
    </div>
</article>
```

---

## 2. CSS (Variables y Estilos)

```css
/* ===== VARIABLES CSS (ya definidas en :root) ===== */
:root {
    /* Colores corporativos VW */
    --vw-blue: #001e50;
    --vw-blue-light: #00437a;
    --vw-accent: #00b0f0;
    --vw-electric: #00d4aa;
    
    /* Sombras */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
    
    /* Bordes redondeados */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    
    /* Espaciado */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Transiciones */
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}

/* ===== CARD DE VEHÍCULO ===== */
.vehicle-card {
    background: var(--white);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-base), 
                box-shadow var(--transition-base);
    position: relative;
}

/* Hover con animación (respeta reduced-motion) */
.vehicle-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

@media (prefers-reduced-motion: reduce) {
    .vehicle-card:hover {
        transform: none;
    }
}

/* Si el usuario activó reducir animaciones en el widget */
.reduced-motion .vehicle-card:hover {
    transform: none;
}

/* Badge */
.vehicle-badge {
    position: absolute;
    top: var(--spacing-md);
    left: var(--spacing-md);
    padding: var(--spacing-xs) var(--spacing-sm);
    background: var(--vw-blue);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: var(--radius-sm);
    z-index: 2;
}

.vehicle-badge.new {
    background: linear-gradient(135deg, var(--vw-accent), var(--vw-electric));
}

.vehicle-badge.electric {
    background: var(--vw-electric);
    color: var(--vw-blue);
}

.vehicle-badge.premium {
    background: linear-gradient(135deg, #c9a227, #f4d03f);
    color: #1a1a1a;
}

/* Imagen */
.vehicle-image {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.vehicle-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform var(--transition-slow);
}

.vehicle-card:hover .vehicle-image img {
    transform: scale(1.05);
}

@media (prefers-reduced-motion: reduce) {
    .vehicle-card:hover .vehicle-image img {
        transform: none;
    }
}

/* Contenido */
.vehicle-content {
    padding: var(--spacing-lg);
}

.vehicle-content h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--vw-blue);
    margin-bottom: var(--spacing-xs);
}

.vehicle-tagline {
    color: var(--gray-600);
    font-size: 0.875rem;
    margin-bottom: var(--spacing-md);
}

/* Especificaciones */
.vehicle-specs {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--gray-200);
}

.vehicle-specs span {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: 0.8rem;
    color: var(--gray-600);
}

.vehicle-specs i {
    color: var(--vw-accent);
}

/* Precio */
.vehicle-price {
    margin-bottom: var(--spacing-lg);
}

.price-from {
    display: block;
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
}

.price-amount {
    display: block;
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--vw-blue);
    line-height: 1.2;
}

.price-note {
    display: block;
    font-size: 0.7rem;
    color: var(--gray-500);
    font-style: italic;
    margin-top: var(--spacing-xs);
}

/* Acciones */
.vehicle-actions {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
}

.vehicle-actions .btn {
    flex: 1;
    min-width: 120px;
    text-align: center;
}

.vehicle-actions .btn-whatsapp {
    flex: 0 0 auto;
    width: 44px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #25D366;
    color: white;
    border-radius: var(--radius-md);
}

.vehicle-actions .btn-whatsapp:hover {
    background: #128C7E;
}

/* Screen reader only (accesibilidad) */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .vehicle-actions {
        flex-direction: column;
    }
    
    .vehicle-actions .btn {
        width: 100%;
    }
    
    .vehicle-actions .btn-whatsapp {
        width: 100%;
    }
}
```

---

## 3. JAVASCRIPT (Interacciones)

```javascript
/**
 * Vehicle Card Module
 * Maneja las interacciones de las cards de vehículos
 */
const VehicleCard = {
    /**
     * Inicializa las cards de vehículos
     */
    init() {
        this.setupFilters();
        this.setupRevealAnimation();
        this.setupWhatsAppTracking();
    },

    /**
     * Configura los filtros de vehículos
     */
    setupFilters() {
        const filterCategory = document.getElementById('filter-category');
        const filterFuel = document.getElementById('filter-fuel');
        const filterPrice = document.getElementById('filter-price');
        const cards = document.querySelectorAll('.vehicle-card');

        const applyFilters = () => {
            const category = filterCategory?.value || 'all';
            const fuel = filterFuel?.value || 'all';
            const maxPrice = filterPrice?.value || 'all';

            cards.forEach(card => {
                const cardCategory = card.dataset.category;
                const cardFuel = card.dataset.fuel;
                const cardPrice = parseInt(card.dataset.price);

                let visible = true;

                // Filtrar por categoría
                if (category !== 'all' && cardCategory !== category) {
                    visible = false;
                }

                // Filtrar por combustible
                if (fuel !== 'all' && !cardFuel.includes(fuel)) {
                    visible = false;
                }

                // Filtrar por precio
                if (maxPrice !== 'all' && cardPrice > parseInt(maxPrice)) {
                    visible = false;
                }

                // Mostrar u ocultar con animación
                if (visible) {
                    card.style.display = '';
                    card.classList.add('reveal');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('reveal');
                }
            });
        };

        // Event listeners
        [filterCategory, filterFuel, filterPrice].forEach(filter => {
            filter?.addEventListener('change', applyFilters);
        });
    },

    /**
     * Configura animación reveal on scroll
     */
    setupRevealAnimation() {
        // Respetar preferencia de reducir animaciones
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const userReducedMotion = document.body.classList.contains('reduced-motion');

        if (prefersReducedMotion || userReducedMotion) {
            // No aplicar animaciones
            document.querySelectorAll('.vehicle-card').forEach(card => {
                card.classList.add('reveal');
            });
            return;
        }

        // Intersection Observer para reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.vehicle-card').forEach(card => {
            observer.observe(card);
        });
    },

    /**
     * Tracking para clicks en WhatsApp
     */
    setupWhatsAppTracking() {
        document.querySelectorAll('.btn-whatsapp').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.vehicle-card');
                const model = card?.querySelector('h3')?.textContent || 'Modelo desconocido';
                
                // Analytics tracking (si está disponible)
                if (typeof gtag === 'function') {
                    gtag('event', 'whatsapp_click', {
                        'event_category': 'engagement',
                        'event_label': model
                    });
                }
                
                console.log(`WhatsApp click tracked: ${model}`);
            });
        });
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    VehicleCard.init();
});
```

---

## 4. DATOS DEL CONTEXTO UTILIZADOS

Este ejemplo usa los siguientes datos exactos del contexto:

| Campo          | Valor                     | Fuente                    |
|----------------|---------------------------|---------------------------|
| Modelo         | Volkswagen Tiguan         | CONTEXTO_PROYECTO_VW.txt  |
| Tipo           | SUV Mediano               | CONTEXTO_PROYECTO_VW.txt  |
| Precio         | 34.300€                   | CONTEXTO_PROYECTO_VW.txt  |
| Motor          | Gasolina / Híbrido PHEV   | CONTEXTO_PROYECTO_VW.txt  |
| Potencia       | 130-272 CV                | CONTEXTO_PROYECTO_VW.txt  |
| Imagen         | images/tiguan.png         | Assets manifest           |
| WhatsApp       | https://wa.me/34622309997 | CONTEXTO_PROYECTO_VW.txt  |
| Contacto       | index.html#contacto       | Navegación interna        |
| Prueba         | prueba-conduccion.html    | Navegación interna        |

---

## 5. CHECKLIST DE ACCESIBILIDAD PARA ESTA CARD

- [x] `role="article"` para semántica
- [x] `aria-labelledby` conectando con el título
- [x] `aria-label` descriptivo en badge
- [x] `alt` descriptivo en imagen
- [x] `loading="lazy"` para performance
- [x] `aria-hidden="true"` en iconos decorativos
- [x] `.sr-only` para texto solo para lectores de pantalla
- [x] `target="_blank"` con `rel="noopener noreferrer"`
- [x] Respeta `prefers-reduced-motion`
- [x] Respeta clase `.reduced-motion` del widget

---

Documento generado: 12/12/2024
Versión: 1.0
