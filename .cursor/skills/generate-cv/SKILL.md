---
name: generate-cv
description: >-
  Genera un recorte de CV (`src/cvs/*.ts`) a medida de una oferta laboral,
  usando solo evidencia de `md/` y las reglas de enfoque del usuario (sobre mí,
  skills, formación fija, idiomas opcionales, experiencia puenteada). Usar cuando
  el usuario pida generar/adaptar un CV, pegue una vacante, o mencione postulación,
  MarTech, ATS o un nuevo puesto.
---

# Generar CV a medida

## Límites

- **Fuente de verdad:** solo `md/` (`perfil-maestro.md`, `experiencia/*`, `conocimientos-solidos.md`, `competencias-implicitas.md`, etc.).
- **No inventar** roles, empresas, fechas, métricas ni tecnologías sin respaldo en `md/`.
- **Sí se puede puenteear** con honestidad: si piden X y hay Y del mismo campo documentado, redactar Y como capacidad afín (ej. Tailwind pedido → responsive con Sass/CSS en Ingala/Infobae).
- **No afirmar dominio** de una herramienta no documentada sin confirmación del usuario.
- Si la oferta pide una tecnología/herramienta **sin mención en `md/`** (ni afín claro): **preguntar al usuario** si la conoce / la ha usado, **antes** de redactar el CV. No omitir en silencio ni inventar.
- Salida: archivo `src/cvs/<slug>.ts` tipado con **`CvEntry`** (`id`, `jobTitle`, `headline`, `company`, `createdAt`, `profile`) desde `./types`. Contacto y educación dentro de `profile` se copian del patrón existente (p. ej. `arc-xp.ts`).
- Registrar el export en [`src/cvs/index.ts`](../../src/cvs/index.ts) (añadirlo al array `cvEntries`). El listado en `/` lo muestra solo; no hace falta tocar `App.tsx`.

## Entrada esperada

1. Texto de la vacante (responsabilidades, requeridos, deseables) **o** enlace + pegado.
2. Nombre sugerido del recorte (si no, derivar slug: `martech`, `ntt-frontend`, etc.).
3. Si falta la vacante, pedirla antes de redactar.

## Flujo (obligatorio, en orden)

### 1. Extraer de la oferta

Armar tres listas:

| Lista | Qué incluir |
|-------|-------------|
| **Requeridos** | Tecnologías y conocimientos explícitos |
| **Deseables** | Nice-to-have |
| **Blandas / cultura** | Colaboración, mentoría, client-facing, etc. solo si la oferta las menciona |

### 2. Mapear a evidencia (`md/`)

Para cada ítem: **match directo** | **afín documentado** | **sin evidencia**.

Usar `conocimientos-solidos.md` + bullets de cada empresa. Consultar `competencias-implicitas.md` solo para ítems como Git/Agile cuando la oferta los pide y el md lo autoriza.

### 2b. Preguntar por huecos (obligatorio si aplica)

Si tras el mapeo quedan ítems **sin evidencia** (requeridos o deseables relevantes):

1. **Detenerse** antes de crear el archivo `.ts`.
2. Listar esas tecnologías/herramientas y preguntar, una ronda clara, p. ej.:
   - ¿La conoces / la has usado en algún proyecto (aunque no esté en `md/`)?
   - Si sí: ¿en qué contexto y con qué nivel (básico / práctico / fuerte)? ¿En qué empresa o proyecto conviene reflejarla?
3. Según la respuesta:
   - **Sí + contexto usable** → incluirla con honestidad (skill y/o bullet); si el usuario quiere, proponer también actualizar `md/` después.
   - **No / solo de oídas** → omitir; si hay afín documentado, puenteear con el afín.
   - **Parcial** → redactar solo lo que confirme, sin inflar.
4. No inventar experiencia laboral nueva solo porque dijo “sí”; el texto debe cuadrar con un rol/periodo real o quedar como skill sin bullet falso.

### 3. Redactar secciones

#### Sobre mí (`summary`)

- 3–5 líneas, ~400–650 caracteres.
- Nombrar **1–2 tecnologías o dominios** que acoplen con la entrevista/oferta (los de mayor peso en requeridos que él cubra).
- Si la oferta menciona habilidades blandas **y** hay evidencia (mentoría, colaboración con clientes/diseño/TI, capacitación), incluir **una** frase breve.
- Incluir años / foco solo si es cierto según `perfil-maestro.md`.
- Español, **primera persona** (igual que la experiencia: “Desarrollé”, “He implementado”). Nunca tercera persona (“Ha trabajado”, “Usa…”): suena a texto autogenerado.
- Tono profesional, sin marketing vacío.
- **IA:** no nombrar Cursor, Copilot ni similares, ni decir que “genera o revisa código” con IA. Si la oferta lo pide y el usuario lo confirmó, una frase corta de alineación (“me mantengo alineado con las tendencias de IA como herramienta de trabajo”). No poner “IA asistida” ni nombres de producto en `skills`.

#### Habilidades (`skills`)

- Priorizar requeridos con match o afín.
- Añadir deseables con match o afín.
- Añadir tecnologías del mismo campo que refuercen (ej. piden GTM → también Data Layer / GA si están documentados).
- Orden: primero lo que más pesa para el ATS de esa oferta.
- Cantidad orientativa: **10–14** ítems. Sin relleno genérico no pedido.
- No listar lo que no sabe; listar el afín con nombre real (Sass, no “Tailwind”).

#### Formación (`education`)

- **Siempre igual:** Ingeniería de Sistemas y Computación — USAT / Universidad Católica Santo Toribio de Mogrovejo — **2019**.
- No añadir CIP ni cursos salvo que la oferta lo pida explícitamente y el usuario lo confirme.

#### Idiomas (`languages`)

- **`[]` por defecto.**
- Solo rellenar si la oferta exige idioma (o el usuario lo pide). Frase desde `md/idiomas.md` (versión conservadora).

#### Experiencia (`experience`)

- Mantener las **4 empresas** y periodos/roles base de `perfil-maestro.md`, salvo indicación contraria.
- **Densidad (usar el espacio de la hoja):**
  - Ingala Tech: **6–8** bullets
  - Infobae: **4–6** bullets
  - Hospital Jaén: **1–2** bullets
  - LOT: **2–3** bullets
- Cada bullet: acción + tecnología/contexto + resultado cuando exista (Lighthouse, ISO, Gobierno Regional, etc.).
- Priorizar en cada rol lo que **cubre puntos de la vacante**. Si el rol ya cubre varios requerimientos, enfatizar esos; si no, puenteear con afines documentados.
- Primera persona del pretérito o estilo “Desarrollé / Implementé…” coherente con el ejemplo MarTech del usuario (no mezclar gerundios sueltos).
- No copiar responsabilidades de la oferta palabra por palabra; traducir a logros propios.

### 4. Metadata del catálogo + headline

- `id`: slug del archivo (`martech`, `ntt-frontend`, …).
- `jobTitle`: título de la vacante / puesto al que postula (lo que se ve en el listado).
- `headline`: rol de presentación en el CV (también `profile.headline`); alinear al puesto sin mentir cargos laborales reales.
  - Ej.: oferta MarTech → `Desarrollador Front-End · MarTech & Analítica`.
- `company`: empresa o cliente de la postulación (ej. `NTT DATA`).
- `createdAt`: fecha ISO `YYYY-MM-DD` del día en que se genera el recorte.

### 5. Entregar

1. Crear `src/cvs/<slug>.ts` con `export const <slug>Cv: CvEntry = { id, jobTitle, headline, company, createdAt, profile: { … } }`.
2. Importarlo y añadirlo en `src/cvs/index.ts` → `cvEntries`.
3. Breve tabla en el chat: requerimiento → cómo quedó cubierto (directo / afín / omitido).
4. En la tabla final, marcar qué se preguntó al usuario y qué decidió (incluido / omitido / afín).
5. Indicar la URL de preview: `/cv/<id>`.

## Checklist final

- [ ] Huecos sin evidencia en `md/` **preguntados** al usuario antes de redactar (si los había)
- [ ] Nada inventado sin confirmación
- [ ] `CvEntry` completo + registro en `src/cvs/index.ts`
- [ ] Sobre mí con tech de la oferta + blanda solo si aplica
- [ ] Skills alineadas a requeridos/deseables (+ afines / confirmados)
- [ ] Educación fija; idiomas vacíos salvo pedido
- [ ] Experiencia densa y orientada a la vacante
- [ ] Cabe en una página A4 con la plantilla actual (si desborda, recortar bullets menores, no mentir)

## Referencias

- Ejemplo de mapeo MarTech: [examples.md](./examples.md)
- Datos: `md/README.md` y archivos enlazados
- Contrato: `src/cvs/types.ts`
