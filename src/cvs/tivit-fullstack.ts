import { withBase } from '../model/base'
import type { CvEntry } from '../model/types'

/** Recorte TIVIT — Fullstack React + Node (sin .NET). Fuente: `md/` + confirmaciones Docker/Jest/IA. */

export const tivitFullstackCv: CvEntry = {
  id: 'tivit-fullstack',
  jobTitle: 'Desarrollador Fullstack (.NET/React + IA)',
  headline: 'Desarrollador Full-Stack · React & Node.js',
  company: 'TIVIT LATAM',
  fileTag: 'TIVIT',
  createdAt: '2026-11-20',
  notes: [
    { topic: 'React, REST, Git, SQL', status: 'directo', detail: 'Evidencia en Ingala, Infobae y LOT.' },
    { topic: '.NET', status: 'omitido', detail: 'No lo maneja. El backend del CV es Node.js.' },
    { topic: 'Docker', status: 'confirmado', detail: 'Básico: Docker Desktop y WSL en proyectos Arc XP.' },
    { topic: 'Jest', status: 'confirmado', detail: 'Selectivo, en componentes o lógica crítica de migraciones.' },
    { topic: 'IA', status: 'confirmado', detail: 'Una frase de alineación. Sin nombrar productos ni generación de código.' },
  ],
  profile: withBase({
    headline: 'Desarrollador Full-Stack · React & Node.js',
    summary:
      'Desarrollador con más de 4 años de experiencia en software, con foco en React y en backends con Node.js y APIs REST. He implementado soluciones sobre arquitecturas de equipo (Arc XP y productos propios), con estándares, code reviews y entregas incrementales. Me mantengo alineado con las tendencias de IA como herramienta de trabajo.',
    skills: [
      'React',
      'JavaScript',
      'Node.js',
      'Express',
      'APIs REST',
      'Git / PRs / code review',
      'SQL / PostgreSQL',
      'Docker (básico)',
      'Jest',
      'MongoDB',
      'HTML / CSS / Sass',
    ],
    languages: [],
    experience: [
      {
        role: 'Desarrollador Front-End | Arc XP Expert',
        company: 'Ingala Tech',
        period: 'Jun 2024 — Ago 2026',
        bullets: [
          'Desarrollé interfaces y componentes con React sobre la arquitectura Arc XP, siguiendo guías técnicas del framework y flujos de equipo en migraciones de medios de alta audiencia.',
          'Integré APIs REST por tipo de contenido y resolvers, conectando servicios con templates y presentación en sitio.',
          'Implementé servicios en Node.js (PocketBase, gestor multimedia) e integración con APIs externas, con auth y preferencias vía cookies.',
          'Analicé bases relacionales (SQL Server, MySQL, PostgreSQL, Oracle) para migrar datos relevantes a MongoDB.',
          'Levanté entornos locales de Arc XP con Docker (Docker Desktop y WSL) para correr las imágenes y contenedores del proyecto.',
          'Apliqué Jest en componentes y lógica crítica durante las migraciones a Arc XP.',
          'Participé en code reviews, estimaciones y entregas incrementales con diseño, TI y clientes; capacité a equipos editoriales y técnicos.',
        ],
      },
      {
        role: 'Desarrollador Front-End',
        company: 'Infobae',
        period: 'Ene 2022 — Jun 2024',
        bullets: [
          'Desarrollé y mantuve componentes React reutilizables y responsivos en Arc XP, con Sass y AMP, alineados a la arquitectura front del medio.',
          'Implementé servicios Node.js para coberturas en vivo (Mundial, elecciones), adaptando datos de fuente al consumo en front.',
          'Participé en decisiones técnicas, code reviews y pair programming, y mentoré a desarrolladores junior.',
          'Integré módulos Angular vía iframe con comunicación cross-frame cuando el producto lo requirió.',
        ],
      },
      {
        role: 'Desarrollador Java Web',
        company: 'Hospital General de Jaén',
        period: 'Oct 2021 — Dic 2021',
        bullets: [
          'Desarrollé funcionalidades en OpenClinic (Java, JSP, Servlets y JavaScript) para digitalización de exámenes e historias clínicas.',
          'Participé en un proyecto respaldado por el Gobierno Regional de Cajamarca.',
        ],
      },
      {
        role: 'Desarrollador Full-Stack',
        company: 'LOT Internacional',
        period: 'Dic 2020 — Oct 2021',
        bullets: [
          'Desarrollé una plataforma full-stack de auditorías ISO 9001, 14001 y 21001 con React, Node.js, Express y PostgreSQL.',
          'Implementé autenticación, roles, permisos y gestión de clientes y empresas sobre APIs REST.',
          'Construí una segunda plataforma de cobranzas (MERN) con React, Node.js, Express, MongoDB, Redux Thunk, Material UI y Axios.',
        ],
      },
    ],
  }),
}
