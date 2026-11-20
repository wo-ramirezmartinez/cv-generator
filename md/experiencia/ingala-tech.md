# Ingala Tech

| Campo | Valor |
|-------|-------|
| Rol | Desarrollador Front-End \| Arc XP Expert |
| Periodo | Junio 2024 — Agosto 2026 |
| Sector | Consultoría / medios digitales |
| Medios (referencia) | La Tercera, El Heraldo, El Cronista, El Universal, LevelUp, La Razón, otros |

## Contexto

Migración y evolución de plataformas editoriales de gran audiencia. Trabajo sobre **Arc XP** con interfaces en **React** y, según proyecto, capas de datos, servicios **Node.js**, analítica y migración de contenidos desde bases relacionales hacia **MongoDB**.

## Responsabilidades consolidadas

### Interfaz y arquitectura front

- Desarrollo de **interfaces, componentes reutilizables** y soluciones de presentación (homepages, notas, secciones, tags).
- Diseño e implementación de **arquitecturas de templates y componentes modulares** por tipo de contenido y sección.
- **Capas de resolución y enrutamiento de datos** para conectar UI con fuentes de contenido (APIs, resolvers).
- Evolución de sitios existentes y **rediseños completos**, con **CSS/Sass** alineado a identidad visual o nueva línea gráfica.
- Optimización de carga: reuso de componentes, optimización de recursos, reducción de peso innecesario.

### Arc XP y ecosistema editorial

- Implementación y personalización sobre **Arc XP**: **Composer**, **PageBuilder**, **Content Sources**, resolvers y servicios de gestión de contenido.
- Integración de interfaces con flujos editoriales y funcionalidades a medida.
- **Capacitación** a equipos editoriales y técnicos en funcionalidades personalizadas.

### APIs, back-end puntual y datos

- Consumo de **APIs REST** con contenido **seccionado por tipo** (deportes, clima, tecnología, etc.); definición de consultas, procesamiento de respuestas y enlace con templates.
- Desarrollo de **servicios en Node.js**: integración con APIs externas y bases de datos.
  - Módulo de **registro de usuarios con PocketBase**.
  - **Gestor de contenido multimedia**: listado y carga de videos con filtros, vinculación por usuario, auth y preferencias vía **cookies**.
- Análisis de BDD relacionales (**SQL Server, MySQL, PostgreSQL**, también Oracle en versiones de CV) para migración a **MongoDB**: tablas/campos necesarios vs descarte de ruido.

### Analítica y medición (énfasis CV v2)

- **Google Tag Manager**, **Google Analytics** y **data layers** para interacciones (ej. formularios).
- Cookies para **autenticación y preferencias**.
- Depuración de APIs con **Chrome DevTools**.

### Entorno local, contenedores y pruebas

- Proyectos Arc XP que **arrancaban bajo contenedores e imágenes Docker**: aprendizaje práctico para **ejecutarlos** y configurar la conexión con **Docker Desktop** y **WSL** (nivel básico de uso diario, no ops avanzado).
- **Jest** en migraciones: pruebas sobre **componentes grandes** o lógica tediosa, en un contexto de cambios rápidos y constantes que limitaba una suite exhaustiva.

### Colaboración y calidad

- Trabajo con **diseño, TI y clientes**: soluciones técnicas, **estimaciones**, **code reviews**, entregas incrementales y presentación de avances.
- Adaptación de soluciones por proyecto: rendimiento, mantenibilidad, consistencia visual.

## Logro destacado

**La Tercera:** Lighthouse **~90** desktop, **~80** mobile en performance; **100** en accesibilidad, mejores prácticas y SEO al entregar.

## Tecnologías

`React` · `JavaScript` · `HTML` · `CSS` · `Sass` · `Node.js` · `REST` · `Arc XP` (Composer, PageBuilder, Content Sources, resolvers) · `MongoDB` · `SQL Server` · `MySQL` · `PostgreSQL` · `Oracle` (migraciones) · `PocketBase` · `GTM` · `Google Analytics` · `Chrome DevTools` · `Docker` (básico, Desktop + WSL) · `Jest` (selectivo)

## Bullets sólidos (listos para CV)

Elegir según oferta; todos están contrastados en al menos una versión de CV.

1. Migración y evolución de medios de alta audiencia (La Tercera, El Heraldo, El Cronista, El Universal, LevelUp, La Razón) con **React** y **Arc XP**.
2. Arquitectura de **templates modulares** y componentes reutilizables (home, nota, sección, tags) integrados con **Content Sources** y resolvers.
3. Integración **REST** por sección y tipo de contenido, conectando respuestas a templates para render seccionado.
4. Optimización de rendimiento y reuso de componentes; en La Tercera, **Lighthouse ~90/80** (desktop/mobile) y **100** en a11y, SEO y best practices.
5. Personalización **Composer / PageBuilder** y capacitación a equipos editoriales y técnicos.
6. Servicios **Node.js** (PocketBase, gestor multimedia con auth por cookies) e integración con APIs externas.
7. Análisis y migración de datos desde **SQL** hacia **MongoDB** definiendo alcance de tablas y campos.
8. Implementación de **GTM, GA y data layers** y cookies para medición y preferencias.
9. Colaboración cross-funcional, estimaciones, code reviews y entregas incrementales con clientes.
10. Entorno local con **Docker** (imágenes/contenedores Arc XP) vía **Docker Desktop** y **WSL**.
11. Pruebas con **Jest** en componentes grandes o lógica crítica durante migraciones de alto ritmo.

## Notas y variantes

- **v1** enfatiza arquitectura Arc XP y mentoring/capacitación con más detalle editorial.
- **v2** añade analítica, cookies y migración SQL multi-motor sin detallar Node/PocketBase.
- **v3** profundiza servicios Node, multimedia, consultas REST por sección y análisis de migración por sitio.