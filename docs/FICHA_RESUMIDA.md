# FICHA RESUMIDA - PROYECTO VW SEVILLA UTREWAL
## Estructura de Archivos, Assets y Endpoints

---

## 1. ESTRUCTURA DE ARCHIVOS

```
/VW/
├── index.html                    # Página principal
├── coches-nuevos.html           # Catálogo de modelos nuevos
├── todos-vehiculos.html         # Categorías y comparativa
├── promociones.html             # Ofertas y financiación
├── prueba-conduccion.html       # Formulario de test drive
├── cita-taller.html             # Formulario de cita en taller
├── styles.css                   # Estilos CSS principales
├── script.js                    # JavaScript interactivo
├── sitemap.xml                  # Mapa del sitio para SEO
├── robots.txt                   # Directivas para crawlers
│
├── images/                      # Imágenes de vehículos
│   ├── polo.png
│   ├── golf.png
│   ├── tcross.png
│   ├── taigo.png
│   ├── troc.png
│   ├── tiguan.png
│   ├── passat.png
│   ├── arteon.png
│   ├── id3.png
│   ├── id4.png
│   └── id7.png
│
├── docs/                        # Documentación
│   ├── CONTEXTO_PROYECTO_VW.txt
│   ├── PROMPT_CLAUDE_VW.txt
│   ├── FICHA_RESUMIDA.md
│   └── CHECKLIST_QA.md
│
└── assets/                      # Assets adicionales (opcional)
    ├── favicon.ico
    └── og-image.jpg
```

---

## 2. MANIFEST DE ASSETS (Imágenes de Vehículos)

| Archivo       | Modelo           | Tipo               | Alt Text                        |
|---------------|------------------|--------------------|---------------------------------|
| polo.png      | Volkswagen Polo  | Urbano             | "Volkswagen Polo 2024"          |
| golf.png      | Volkswagen Golf  | Compacto           | "Volkswagen Golf 2024"          |
| tcross.png    | Volkswagen T-Cross | SUV Urbano       | "Volkswagen T-Cross 2024"       |
| taigo.png     | Volkswagen Taigo | Coupé SUV          | "Volkswagen Taigo 2024"         |
| troc.png      | Volkswagen T-Roc | SUV Compacto       | "Volkswagen T-Roc 2024"         |
| tiguan.png    | Volkswagen Tiguan | SUV Mediano       | "Volkswagen Tiguan 2024"        |
| passat.png    | Volkswagen Passat | Familiar          | "Volkswagen Passat 2024"        |
| arteon.png    | Volkswagen Arteon | Premium           | "Volkswagen Arteon 2024"        |
| id3.png       | Volkswagen ID.3  | Eléctrico          | "Volkswagen ID.3 Eléctrico"     |
| id4.png       | Volkswagen ID.4  | SUV Eléctrico      | "Volkswagen ID.4 SUV Eléctrico" |
| id7.png       | Volkswagen ID.7  | Berlina Eléctrica  | "Volkswagen ID.7 Berlina"       |

---

## 3. ENDPOINTS Y URLS (Usar exactamente como aparecen)

### 3.1 Redes Sociales
| Red       | URL                                      |
|-----------|------------------------------------------|
| Facebook  | https://www.facebook.com/UtrewalSevilla  |
| Instagram | https://www.instagram.com/utrewal_sa     |
| Twitter/X | https://twitter.com/utrewal_sa           |
| WhatsApp  | https://wa.me/34622309997                |

### 3.2 Teléfonos (formato href="tel:")
| Ubicación        | Departamento    | Teléfono     | Formato Link           |
|------------------|-----------------|--------------|------------------------|
| Utrera           | General/Ventas  | 622 309 997  | tel:622309997          |
| Utrera           | Taller          | 955 860 606  | tel:955860606          |
| Utrera           | Chapa/Pintura   | 648 411 263  | tel:648411263          |
| Alcalá           | General/Ventas  | 622 309 997  | tel:622309997          |
| Alcalá           | Ventas          | 955 616 464  | tel:955616464          |
| Alcalá           | Taller          | 955 616 464  | tel:955616464          |

### 3.3 Emails (formato href="mailto:")
| Ubicación | Departamento   | Email                               |
|-----------|----------------|-------------------------------------|
| Utrera    | Ventas         | jtristancho@utrewal.volkswagen.es   |
| Utrera    | Taller         | atc@utrewal.volkswagen.es           |
| Utrera    | Recambios      | recambios@03407.volkswagen.es       |
| Utrera    | Chapa/Pintura  | carroceria@utrewal.volkswagen.es    |
| Alcalá    | Ventas         | csanmartin@utrewal.volkswagen.es    |
| Alcalá    | Taller         | atc@utrewal.volkswagen.es           |
| Alcalá    | Recambios      | recambios@03407.volkswagen.es       |

### 3.4 Direcciones Físicas
| Ubicación       | Dirección Completa                                                              |
|-----------------|---------------------------------------------------------------------------------|
| Utrera          | Ctra. Écija - Jerez, 15 - 41710 Utrera (Sevilla)                               |
| Alcalá          | Autovía Sevilla - Málaga A92 Km 11, Salida A12 - 41500 Alcalá de Guadaíra      |

---

## 4. NAVEGACIÓN INTERNA

| Enlace Menú    | Archivo Destino           | Anchor (si aplica) |
|----------------|---------------------------|---------------------|
| Inicio         | index.html                | -                   |
| Coches Nuevos  | coches-nuevos.html        | -                   |
| Promociones    | promociones.html          | -                   |
| Servicios      | index.html                | #servicios          |
| Cita Taller    | cita-taller.html          | -                   |
| Prueba         | prueba-conduccion.html    | -                   |
| Contacto       | index.html                | #contacto           |

---

## 5. VARIABLES CSS (Paleta de Colores)

```css
:root {
    /* Colores corporativos VW */
    --vw-blue: #001e50;
    --vw-blue-light: #00437a;
    --vw-accent: #00b0f0;
    --vw-electric: #00d4aa;
    
    /* Estados */
    --danger: #e74c3c;
    --success: #27ae60;
    --warning: #f39c12;
    
    /* Neutros */
    --white: #ffffff;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
}
```

---

## 6. LOGO VW (SVG Inline)

```svg
<svg class="vw-logo" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="33" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M35 5 L22 38 L35 62 L48 38 Z" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <path d="M11 22 L35 38 L59 22" fill="none" stroke="currentColor" stroke-width="3.5"/>
</svg>
```

---

## 7. PRECIOS OFICIALES (Tabla de Referencia)

| Modelo   | Precio Desde | Nota                    |
|----------|--------------|-------------------------|
| Polo     | 16.900€      | *Con financiación       |
| Golf     | 25.480€      | *PVP recomendado        |
| T-Cross  | 20.300€      | *Con financiación       |
| Taigo    | 19.900€      | *Con financiación       |
| T-Roc    | 23.700€      | *Con financiación       |
| Tiguan   | 34.300€      | *Con financiación       |
| Passat   | 43.200€      | *PVP recomendado        |
| Arteon   | 54.800€      | *PVP recomendado        |
| ID.3     | 28.500€      | *Con ayudas y financiación |
| ID.4     | 34.400€      | *Con ayudas MOVES III   |
| ID.7     | 58.470€      | *PVP recomendado        |

**Nota legal obligatoria:** "Precios orientativos. Incluyen IVA."

---

Documento generado: 12/12/2024
Versión: 1.0
