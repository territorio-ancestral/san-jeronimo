# AGENTS.md — Guía de Colaboración · Territorio Ancestral San Jerónimo

> Este archivo define las pautas técnicas y de estilo para todos los agentes de IA (y colaboradores humanos) que contribuyan a este proyecto.

---

## Descripción del Proyecto

Sitio web cultural del **Territorio Ancestral San Jerónimo – Caldas, Colombia**. Preserva y comparte la cultura, tradiciones, historia, música, gastronomía y sabiduría ancestral de la comunidad indígena local.

El sitio fue originalmente construido con HTML/CSS/JS vainilla y está siendo migrado a una arquitectura moderna basada en **React + Vite + TypeScript**.

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework UI | React 18+ |
| Bundler | Vite 5+ |
| Lenguaje | TypeScript (modo estricto) |
| Estilos | CSS Modules (`*.module.css`) — sin librerías de UI externas |
| Fuentes | Google Fonts: `Cinzel` (títulos) + `Lora` (cuerpo) |
| Deploy | GitHub Pages — salida de build en carpeta `/docs` |

---

## Estructura de Carpetas

```
san-jeronimo/
├── docs/                    # ← Salida del build (Vite outDir). NO editar manualmente.
├── public/                  # Activos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── assets/              # Recursos importados en componentes (íconos, svg, etc.)
│   ├── components/          # Componentes React reutilizables
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── Nav/
│   │   ├── sections/        # Una carpeta por sección del sitio
│   │   │   ├── Inicio/
│   │   │   ├── Cultura/
│   │   │   ├── Historias/
│   │   │   ├── Tradiciones/
│   │   │   ├── Dichos/
│   │   │   ├── Musica/
│   │   │   ├── Eventos/
│   │   │   ├── Gastronomia/
│   │   │   └── Territorio/
│   │   └── ui/              # Elementos UI muy pequeños y reutilizables (Divider, Card, etc.)
│   ├── data/                # Datos estáticos en JSON/TS (textos de secciones, listas, etc.)
│   ├── hooks/               # Custom hooks de React
│   ├── styles/              # Variables CSS globales y estilos de reset
│   │   ├── globals.css      # Reset + variables CSS custom properties
│   │   └── tokens.css       # Design tokens (colores, tipografía, espaciado)
│   ├── types/               # Tipos e interfaces TypeScript compartidos
│   ├── App.tsx
│   └── main.tsx
├── dialecto/                # Contenido markdown del dialecto regional (no mover)
├── AGENTS.md                # Este archivo
├── index.html               # Punto de entrada Vite (raíz del proyecto)
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Configuración de Vite (Obligatoria)

El directorio de salida **debe ser `docs`** para compatibilidad con GitHub Pages:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
```

> ⚠️ Nunca cambiar `outDir` sin actualizar también la configuración de GitHub Pages en el repositorio.

---

## Convenciones de Código

### TypeScript

- Usar `strict: true` en `tsconfig.json`.
- Tipar **todos** los props de componentes con `interface` (preferido sobre `type` para props de componentes).
- No usar `any`. Si es necesario evadir el sistema de tipos, usar `unknown` con type guard.
- Los archivos de componentes usan extensión `.tsx`; los archivos de lógica pura usan `.ts`.

```ts
// ✅ Correcto
interface CardProps {
  titulo: string
  icono: string
  descripcion: string
}

export function Card({ titulo, icono, descripcion }: CardProps) { ... }

// ❌ Incorrecto
export function Card(props: any) { ... }
```

### React

- Usar **componentes funcionales** con hooks. No usar componentes de clase.
- Un componente por archivo. El nombre del archivo debe coincidir con el nombre del componente.
- Etiquetar secciones con el `id` correspondiente para mantener los anclas de navegación (`#inicio`, `#cultura`, etc.).
- Los datos de contenido (textos, listas) deben extraerse a `/src/data/` como objetos TypeScript tipados, **no** hardcodearse en el JSX.

```ts
// src/data/dichos.ts
export interface Dicho {
  texto: string
  fuente: string
}

export const dichos: Dicho[] = [
  { texto: 'El que camina despacio, llega lejos y conoce el camino', fuente: 'Proverbio ancestral' },
  // ...
]
```

### CSS Modules

- Cada componente tiene su propio archivo `.module.css` en la misma carpeta.
- Las variables CSS (design tokens) se definen en `src/styles/globals.css` como `--color-*`, `--font-*`, `--spacing-*` y se usan desde los modules.
- **No usar CSS-in-JS, Tailwind ni librerías de componentes**. El estilo visual debe preservar la identidad cultural del proyecto (paleta tierra/oro/jade, tipografía Cinzel/Lora).
- Usar `camelCase` para nombres de clases en módulos CSS.

```css
/* Header.module.css */
.mainHeader {
  background: linear-gradient(135deg, var(--color-tierra) 0%, var(--color-noche) 100%);
}
```

```tsx
// Header.tsx
import styles from './Header.module.css'

export function Header() {
  return <header className={styles.mainHeader}>...</header>
}
```

### Paleta de colores (preservar siempre)

| Token | Valor | Uso |
|---|---|---|
| `--color-tierra` | `#8b4513` | Fondo header, acentos |
| `--color-oro` | `#daa520` | Detalles decorativos, bordes |
| `--color-jade` | `#2d5f3f` | Secciones secundarias |
| `--color-cielo` | `#4a90a4` | Acentos suaves |
| `--color-fuego` | `#c44536` | CTA, alertas |
| `--color-arena` | `#e8c99b` | Fondos cálidos |
| `--color-noche` | `#1a1a2e` | Texto principal, fondo oscuro |
| `--color-luz` | `#f5f5dc` | Fondo claro, texto sobre oscuro |

---

## Experiencia de Usuario — Principios a Respetar

1. **Navegación suave**: mantener scroll suave con `scroll-behavior: smooth` y scroll-spy para la barra de navegación.
2. **Animaciones de entrada**: los elementos de cada sección deben aparecer con una animación suave al hacer scroll (usar `IntersectionObserver` o la librería `@vite/plugin-react` con CSS transitions, no librerías pesadas).
3. **Responsive**: diseño mobile-first. El menú hamburguesa para móvil debe seguir funcionando.
4. **Accesibilidad**: usar HTML semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). Todos los botones deben tener `aria-label`. Las imágenes decorativas usan `alt=""`.
5. **Performance**: no cargar fuentes ni recursos bloqueantes innecesarios. Las fuentes de Google Fonts ya están configuradas con `preconnect`.
6. **Sin pérdida de contenido**: todo el texto, secciones y datos del `index.html` original deben estar presentes en la versión React.

---

## Flujo de Trabajo Git

1. Crear una rama descriptiva desde `main`:
   ```bash
   git checkout -b feature/migrar-seccion-cultura
   ```
2. Hacer commits atómicos con mensajes en español e imperativo:
   ```
   feat: agregar componente Cultura con datos tipados
   fix: corregir scroll-spy en navegación móvil
   style: ajustar colores de tarjetas en sección Dichos
   ```
3. Abrir Pull Request a `main` con descripción del cambio.
4. **Antes de hacer merge**: ejecutar el build y verificar que la carpeta `docs/` se genera correctamente.

### Comandos esenciales

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción → genera /docs
npm run build

# Previsualizar el build localmente
npm run preview
```

---

## Secciones del Sitio (Referencia)

| ID de sección | Componente React | Descripción |
|---|---|---|
| `#inicio` | `Inicio` | Hero de bienvenida |
| `#cultura` | `Cultura` | Cosmovisión, sabiduría, arte |
| `#historias` | `Historias` | Leyendas y relatos ancestrales |
| `#tradiciones` | `Tradiciones` | Ceremonias y rituales vivos |
| `#dichos` | `Dichos` | Proverbios y sabiduría en palabras |
| `#musica` | `Musica` | Instrumentos y música tradicional |
| `#eventos` | `Eventos` | Calendario de eventos culturales |
| `#gastronomia` | `Gastronomia` | Platos y bebidas ancestrales |
| `#territorio` | `Territorio` | Descripción del territorio sagrado |

---

## Qué NO hacer

- ❌ Editar archivos dentro de `docs/` manualmente — son generados por Vite.
- ❌ Cambiar la paleta de colores o las fuentes sin consenso del equipo.
- ❌ Instalar librerías de componentes UI (Material UI, Chakra, Ant Design, etc.).
- ❌ Usar `useEffect` para lógica que puede ser declarativa.
- ❌ Hardcodear textos en JSX sin extraerlos a `/src/data/`.
- ❌ Romper los anclas de navegación (`#seccion`) que enlazan desde el menú.
- ❌ Eliminar o mover la carpeta `dialecto/` — contiene contenido de valor cultural.

---

## Información del Proyecto

- **Territorio**: San Jerónimo, Caldas, Colombia
- **Propósito**: Preservación y difusión del patrimonio cultural indígena
- **Idioma principal del sitio**: Español (`lang="es"`)
- **Deploy**: GitHub Pages (rama `main`, carpeta `/docs`)

---

*Este documento debe actualizarse cada vez que se modifiquen las convenciones del proyecto.*
