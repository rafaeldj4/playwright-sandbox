# Playwright Sandbox (TypeScript)

Proyecto de pruebas end-to-end con Playwright Test y TypeScript.

## Configuración del Proyecto

- Pruebas: `@playwright/test` (Chromium configurado; reporter HTML; `trace: on-first-retry`).
- TypeScript: `tsconfig.json` con `baseUrl: "."` y alias de rutas:
  - `@pages/*` → `./pages/*`
  - `@utils/*` → `./utils`
- Resolución de alias en runtime: `tsconfig-paths/register` importado en `playwright.config.ts`.
- Variables de entorno: cargadas con `dotenv` desde `.env` (ver `.env.example`).

## Estructura

- `tests/` — Especificaciones de prueba (`*.spec.ts`).
- `pages/` — Page Objects (clases para páginas, por ejemplo `LoginPage.ts`).
- `utils/` — Utilidades compartidas (si aplica).
- `playwright.config.ts` — Configuración de Playwright.
- `env.d.ts` — Tipado de variables de entorno de `process.env`.
- `.env` / `.env.example` — Variables de entorno (no commitear `.env`).

## Detalles Clave

- `playwright.config.ts`:
  - `testDir: ./tests`
  - `use.headless: false`
  - `reporter: "html"`
  - `trace: "on-first-retry"`
  - `import "tsconfig-paths/register"` para que funcionen `@pages` y `@utils`.
  - `dotenv.config()` al inicio para cargar `.env`.

- `tsconfig.json`:
  - `baseUrl: "."` para habilitar imports no relativos.
  - `paths` con alias `@pages/*` y `@utils/*`.
  - `include`: `env.d.ts`, `tests/**/*.ts`, `src/**/*.ts`, `playwright.config.ts`.

- Page Objects (ejemplo `pages/LoginPage.ts`):
  - Tipados con `Page` y `Locator`.
  - Métodos de conveniencia como `goto(url)` y `login(usuario, contraseña)`.

## Requisitos

- Node.js 18 o superior.

## Instalación

1) Instalar dependencias:

```
npm install
```

2) Instalar navegadores de Playwright (primera vez):

```
npx playwright install
```

3) Crear `.env` a partir de `.env.example` y completar valores.

## Ejecución de Pruebas

- Ejecutar todas las pruebas:

```
npx playwright test
```

- UI Mode:

```
npx playwright test --ui
```

- Archivo específico:

```
npx playwright test tests/academystudy.spec.ts
```

## Consejos y Solución de Problemas

- IntelliSense de Page Objects:
  - Asegúrate de usar tipos en constructores (`constructor(page: Page)`).
  - Reinicia el servidor de TypeScript del editor tras cambiar `tsconfig.json`.

- Alias de rutas no resuelve en tiempo de ejecución:
  - Verifica `import "tsconfig-paths/register"` en `playwright.config.ts`.

- Variables de entorno sin tipado:
  - Mantén `env.d.ts` alineado con las claves realmente usadas en los tests.

