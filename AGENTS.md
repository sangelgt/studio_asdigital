# AGENTS.md - Onboarding & Technical Standards for Jules

Este documento proporciona el contexto crítico para que Jules genere planes y código alineados con la arquitectura de **Angel Salazar Digital**.

## 1. Architecture Overview
- **Tech Stack:** Next.js 15+ (App Router), TypeScript (Strict Mode), Tailwind CSS, Shadcn/UI, y Lucide React/Material Symbols.
- **Deployment Model:** Exportación Estática (SSG) para GitHub Pages.
- **Key Directories:**
  - `/src/app`: Rutas y páginas (App Router).
  - `/src/components`: Componentes reutilizables de UI.
  - `/public`: Activos estáticos.
  - `.github/workflows`: Configuración de CI/CD para el despliegue automático.

## 2. Coding Conventions
- **Static First:** Está estrictamente prohibido el uso de APIs de servidor (Node.js runtime) en tiempo de ejecución. Todo debe ser compatible con `output: 'export'`.
- **Image Handling:** Se debe usar el componente `next/image` con la propiedad `unoptimized: true` para compatibilidad con hosting estático.
- **Type Safety:** - Prohibido el uso de `any`. 
  - Al extender componentes de terceros, usar `React.ComponentProps<typeof Component>` para evitar errores de exportación de módulos (especialmente con `next-themes`).
- **Component Patterns:**
  - Los estilos de fondo complejos deben manejarse en contenedores `div` y no pasarse como props a componentes de animación personalizados (ej. `AnimateOnScroll`).
  - Siempre incluir `"use client"` en la primera línea de componentes que utilicen Hooks o Contextos.

## 3. Running Tests & Build Validation
Para asegurar que los cambios no rompan el despliegue en GitHub Actions:
- **Installation:** `npm install`
- **Build Validation (Crítico):** `npm run build`
  - Jules debe verificar que el build genere exitosamente la carpeta `/out` sin errores de TypeScript o Linting antes de cada Pull Request.
- **Linting:** `npm run lint`

## 4. Common Tasks
### Despliegue de Cambios
1. Realizar cambios en la lógica o UI.
2. Actualizar el `basePath` en `next.config.ts` si el nombre del repositorio cambia (actualmente `/sangelgt`).
3. Ejecutar `npm run build` localmente para confirmar que no hay errores de tipado.
4. Crear commit siguiendo la convención: `feat:`, `fix:` o `chore:`.

### Adición de Nuevas Páginas
- Asegurar que la metadata esté definida en cada `page.tsx`.
- Verificar que todos los enlaces internos utilicen el componente `Link` de Next.js.
