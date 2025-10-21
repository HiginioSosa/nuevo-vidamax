# 🏦 Nuevo Vidamax - Seguros Azteca

Aplicación web moderna para la gestión y visualización de seguros de vida Vidamax de Banco Azteca, desarrollada con React, TypeScript y Webpack.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Decisiones Técnicas](#-decisiones-técnicas)
- [Estructura de Carpetas](#-estructura-de-carpetas)
- [Componentes Principales](#-componentes-principales)
- [Estilos y Theming](#-estilos-y-theming)
- [Rutas de la Aplicación](#-rutas-de-la-aplicación)

## 🎯 Descripción del Proyecto

Nuevo Vidamax es una aplicación web informativa que presenta los seguros de vida ofrecidos por Banco Azteca. La aplicación permite a los usuarios:

- Explorar información detallada sobre los planes de seguros
- Conocer las condiciones y coberturas
- Aprender sobre el proceso de siniestros
- Acceder a un centro de ayuda con preguntas frecuentes
- Consultar información sobre pólizas

## 🚀 Tecnologías Utilizadas

### Core
- **React 19.2.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.9.3** - Superset de JavaScript que añade tipado estático
- **React Router DOM 7.9.4** - Enrutamiento declarativo para React

### Build Tools
- **Webpack 5.102.1** - Module bundler para empaquetar la aplicación
- **Babel 7.28.x** - Transpilador de JavaScript para compatibilidad con navegadores
- **TypeScript Compiler** - Compilador de TypeScript

### Estilos
- **SASS/SCSS 1.93.2** - Preprocesador CSS con características avanzadas
- **CSS Modules** - Estilos encapsulados por componente

### Development Tools
- **Webpack Dev Server 5.2.2** - Servidor de desarrollo con hot reload
- **TS Loader** - Carga y transpila archivos TypeScript
- **Sass Loader** - Compila archivos SCSS a CSS

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (versión 7 o superior) o **yarn**

Para verificar las versiones instaladas:

```bash
node --version
npm --version
```

## 🔧 Instalación

1. **Clonar el repositorio** (o descargar el proyecto):

```bash
git clone <url-del-repositorio>
cd nuevo-vidamax
```

2. **Instalar las dependencias**:

```bash
npm install
```

o si usas yarn:

```bash
yarn install
```

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Inicia la aplicación en modo desarrollo y abre automáticamente el navegador.

```bash
npm start
```

- La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)
- Hot reload habilitado: los cambios se reflejan automáticamente
- Los errores de compilación y lint se mostrarán en la consola

### `npm run dev`

Inicia el servidor de desarrollo sin abrir automáticamente el navegador.

```bash
npm run dev
```

### `npm run build`

Construye la aplicación para producción en la carpeta `dist/`.

```bash
npm run build
```

- Optimiza el build para mejor rendimiento
- Los archivos son minificados
- Los nombres de archivo incluyen hashes para cache busting
- La aplicación está lista para ser desplegada

## 🏗️ Arquitectura del Proyecto

### Arquitectura General

El proyecto sigue una **arquitectura basada en componentes** con separación clara de responsabilidades:

```
┌─────────────────────────────────────┐
│           React App                 │
│  ┌───────────────────────────────┐  │
│  │    React Router (BrowserRouter)│  │
│  │  ┌─────────────────────────┐  │  │
│  │  │     Layout Components   │  │  │
│  │  │  - Navbar               │  │  │
│  │  │  - Footer               │  │  │
│  │  └─────────────────────────┘  │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │        Views/Pages      │  │  │
│  │  │  - Home                 │  │  │
│  │  │  - NuestrosSeguros      │  │  │
│  │  │  - CentroAyuda          │  │  │
│  │  │  - Polizas              │  │  │
│  │  └─────────────────────────┘  │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   Reusable Components  │  │  │
│  │  │  - Button               │  │  │
│  │  │  - Accordion            │  │  │
│  │  │  - Banner               │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Patrón de Componentes

- **Atomic Design adaptado**: Componentes reutilizables en `/components` y vistas específicas en `/views`
- **Componentes funcionales con TypeScript**: Uso de React.FC con tipado estricto
- **Co-location de estilos**: Cada componente tiene su archivo SCSS asociado

## 🎨 Decisiones Técnicas

### 1. **TypeScript sobre JavaScript**

**Decisión**: Usar TypeScript en lugar de JavaScript puro.

**Razones**:
- ✅ **Type Safety**: Detecta errores en tiempo de compilación
- ✅ **Mejor DX**: Autocompletado e IntelliSense mejorado
- ✅ **Mantenibilidad**: Código más predecible y fácil de refactorizar
- ✅ **Documentación implícita**: Los tipos sirven como documentación
- ✅ **Escalabilidad**: Facilita el crecimiento del proyecto

### 2. **Webpack sobre Create React App**

**Decisión**: Configurar Webpack manualmente en lugar de usar CRA.

**Razones**:
- ✅ **Control total**: Configuración personalizada según necesidades
- ✅ **Optimización**: Control sobre el proceso de build y optimizaciones
- ✅ **Alias de importación**: Configuración de path aliases (@components, @views, etc.)
- ✅ **Sin dependencias innecesarias**: Solo lo que realmente se necesita
- ✅ **Aprendizaje**: Mejor comprensión del proceso de bundling

**Configuración incluye**:
- Content hashing para cache busting
- Hot Module Replacement (HMR)
- Soporte para TypeScript y JSX
- Loaders para SCSS y assets
- History API fallback para SPA routing

### 3. **SCSS sobre CSS-in-JS**

**Decisión**: Usar SCSS como preprocesador CSS.

**Razones**:
- ✅ **Variables y mixins reutilizables**: Sistema de diseño consistente
- ✅ **Anidación**: Código más legible y organizado
- ✅ **Sin runtime overhead**: Compilado a CSS puro
- ✅ **Familiaridad**: Sintaxis ampliamente conocida
- ✅ **Separación de concerns**: Estilos separados de la lógica

**Estructura de estilos**:
```scss
// _variables.scss - Tokens de diseño
$color-primary-dark: #006341;
$spacing-md: 24px;

// _mixins.scss - Utilidades reutilizables
@mixin responsive($breakpoint) { ... }

// Component.scss - Estilos del componente
@import '@styles/variables';
```

### 4. **React Router v7**

**Decisión**: Usar React Router para el routing.

**Razones**:
- ✅ **SPA Navigation**: Navegación sin recargas
- ✅ **Declarativo**: Definición clara de rutas
- ✅ **URL Management**: Control de URLs y navegación programática
- ✅ **Code splitting ready**: Preparado para lazy loading futuro

### 5. **Estructura de Carpetas Component-First**

**Decisión**: Organizar por feature/componente en lugar de por tipo de archivo.

```
components/
  Button/
    Button.tsx
    Button.scss
views/
  NuestrosSeguros/
    NuestrosSeguros.tsx
    NuestrosSeguros.scss
    Descripcion.tsx
    Planes.tsx
```

**Razones**:
- ✅ **Cohesión**: Archivos relacionados juntos
- ✅ **Escalabilidad**: Fácil agregar nuevas features
- ✅ **Mantenibilidad**: Localización rápida de código
- ✅ **Portabilidad**: Componentes autocontenidos

### 6. **Sistema de Design Tokens**

**Decisión**: Centralizar variables de diseño en `_variables.scss`.

**Razones**:
- ✅ **Consistencia**: Colores y espaciados uniformes
- ✅ **Mantenibilidad**: Cambios centralizados
- ✅ **Brand compliance**: Adherencia a guías de marca
- ✅ **Responsive design**: Breakpoints predefinidos

### 7. **Path Aliases**

**Decisión**: Configurar aliases para imports (`@components`, `@views`, etc.).

```typescript
import Button from '@components/Button/Button';
// en lugar de
import Button from '../../../components/Button/Button';
```

**Razones**:
- ✅ **Legibilidad**: Imports más claros
- ✅ **Mantenibilidad**: No se rompen al mover archivos
- ✅ **DX mejorada**: Autocompletado más efectivo

## 📁 Estructura de Carpetas

```
nuevo-vidamax/
├── public/                      # Archivos estáticos
│   ├── index.html              # Template HTML principal
│   └── favicon.png             # Icono de Banco Azteca
│
├── src/                        # Código fuente
│   ├── assets/                 # Recursos estáticos
│   │   └── images/            # Imágenes del proyecto
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── Accordion/        # Componente de acordeón
│   │   ├── Banner/           # Banner informativo
│   │   ├── Breadcrumbs/      # Navegación de migas
│   │   ├── Button/           # Botón personalizado
│   │   ├── Footer/           # Pie de página
│   │   ├── Navbar/           # Barra de navegación
│   │   └── SubNavigation/    # Sub-navegación
│   │
│   ├── views/                # Páginas/Vistas
│   │   ├── Home/            # Página de inicio
│   │   ├── NuestrosSeguros/ # Información de seguros
│   │   │   ├── Condiciones.tsx
│   │   │   ├── Descripcion.tsx
│   │   │   ├── Planes.tsx
│   │   │   └── Siniestro.tsx
│   │   ├── CentroAyuda/     # Centro de ayuda/FAQ
│   │   └── Polizas/         # Información de pólizas
│   │
│   ├── styles/              # Estilos globales
│   │   ├── _variables.scss  # Variables de diseño
│   │   ├── _mixins.scss     # Mixins SCSS reutilizables
│   │   └── global.scss      # Estilos globales
│   │
│   ├── types/               # Definiciones TypeScript
│   │   └── global.d.ts      # Tipos globales
│   │
│   ├── App.tsx              # Componente raíz
│   └── index.tsx            # Punto de entrada
│
├── webpack.config.js         # Configuración de Webpack
├── tsconfig.json            # Configuración de TypeScript
├── package.json             # Dependencias y scripts
└── README.md               # Este archivo
```

## 🧩 Componentes Principales

### Layout Components

- **Navbar**: Barra de navegación principal con enlaces a todas las secciones
- **Footer**: Pie de página con información corporativa y enlaces útiles
- **SubNavigation**: Navegación secundaria para secciones específicas

### UI Components

- **Button**: Botón reutilizable con variantes de estilo
- **Accordion**: Componente desplegable para FAQs y contenido colapsable
- **Banner**: Banner informativo para destacar información importante
- **Breadcrumbs**: Navegación de migas de pan para orientación del usuario

### Views (Páginas)

- **Home**: Página de bienvenida
- **NuestrosSeguros**: Sección principal con información detallada de seguros
  - Descripción general
  - Planes disponibles
  - Condiciones y términos
  - Proceso de siniestros
- **CentroAyuda**: Centro de ayuda con FAQs
- **Polizas**: Información sobre pólizas

## 🎨 Estilos y Theming

### Paleta de Colores

```scss
$color-primary-dark: #006341;    // Verde Banco Azteca
$color-primary-light: #CFE7C5;   // Verde claro
$color-secondary: #EF3C9A;       // Rosa/Magenta
$color-dark: #393939;            // Gris oscuro
$color-white: #FFFFFF;           // Blanco
```

### Sistema de Espaciado

```scss
$spacing-xs: 8px;
$spacing-sm: 16px;
$spacing-md: 24px;
$spacing-lg: 32px;
$spacing-xl: 48px;
$spacing-xxl: 64px;
```

### Breakpoints Responsive

```scss
$breakpoint-mobile: 576px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-large: 1200px;
```

### Uso de Mixins

```scss
@import '@styles/variables';
@import '@styles/mixins';

.component {
  @include responsive(tablet) {
    // Estilos para tablet y superior
  }
}
```

## 🛣️ Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Redirect | Redirige a `/nuestros-seguros` |
| `/inicio` | Home | Página de inicio |
| `/nuestros-seguros` | NuestrosSeguros | Información de seguros |
| `/centro-ayuda` | CentroAyuda | Centro de ayuda y FAQs |
| `/polizas` | Polizas | Información de pólizas |


**Desarrollado para Higinio Sosa - Seguros Vidamax** 🏦
