import type { CvEntry } from './types'

/** Recorte BCP — frontend web. Sin microfrontends, CI/CD propio ni observabilidad de plataforma. */

export const bcpFrontendCv: CvEntry = {
  id: 'bcp-frontend',
  jobTitle: 'Frontend Web Software Engineer',
  headline: 'Desarrollador Front-End · React',
  company: 'Banco de Crédito BCP',
  createdAt: '2026-11-20',
  profile: {
    name: 'William Ramirez',
    headline: 'Desarrollador Front-End · React',
    location: 'Pimentel, Lambayeque, Perú',
    summary:
      'Desarrollador Front-End con más de 4 años en equipos que migran y evolucionan sitios de gran audiencia. Dejé piezas reutilizables y criterios de construcción para que el equipo pudiera repetir el mismo nivel en los siguientes sitios. Las entregas cuidaron rendimiento, accesibilidad y SEO, y acompañé a perfiles nuevos en ese proceso.',
    contact: [
      {
        label: 'wo.ramirezmartinez@gmail.com',
        href: 'mailto:wo.ramirezmartinez@gmail.com',
        kind: 'email',
      },
      {
        label: '+51 926 206 624',
        href: 'tel:+51926206624',
        kind: 'phone',
      },
      {
        label: 'linkedin.com/in/williamrmz',
        href: 'https://www.linkedin.com/in/williamrmz/',
        kind: 'linkedin',
      },
      {
        label: 'github.com/williamrmz',
        href: 'https://github.com/williamrmz',
        kind: 'github',
      },
    ],
    skills: [
      'React',
      'JavaScript',
      'HTML y CSS',
      'Sass',
      'TypeScript',
      'APIs REST',
      'GraphQL (consumo)',
      'Git / GitHub',
      'Figma',
      'Accesibilidad web',
      'Jest',
      'Arc XP',
    ],
    education: [
      {
        title: 'Ingeniería de Sistemas y Computación',
        institution: 'Universidad Católica Santo Toribio de Mogrovejo',
        year: '2019',
      },
    ],
    languages: [],
    experience: [
      {
        role: 'Desarrollador Front-End | Arc XP Expert',
        company: 'Ingala Tech',
        period: 'Jun 2024 — Ago 2026',
        bullets: [
          'Desarrollé interfaces y componentes reutilizables en React para la migración de medios como La Tercera, El Heraldo, El Cronista, El Universal, LevelUp y La Razón.',
          'Implementé templates modulares (home, nota, sección y tags) integrados con Content Sources, resolvers y APIs REST.',
          'Integré el SDK de suscripciones e identity de Arc XP en varios de esos medios.',
          'Apliqué y ajusté ADRs y estándares de creación de componentes; en un producto low cost inspirado en Arc XP, usé esos criterios para acercar la arquitectura al CMS e implementé la gestión de usuarios.',
          'Implementé interfaces a partir de Figma en rediseños, ajustes puntuales y diseños ya documentados.',
          'Dejé las entregas con Lighthouse en verde: en La Tercera, ~90 desktop y ~80 mobile en performance, y 100 en accesibilidad, mejores prácticas y SEO.',
          'Participé en code reviews, estimaciones y capacitación a equipos editoriales y técnicos.',
          'Apliqué Jest en componentes y lógica crítica durante las migraciones.',
        ],
      },
      {
        role: 'Desarrollador Front-End',
        company: 'Infobae',
        period: 'Ene 2022 — Jun 2024',
        bullets: [
          'Desarrollé y mantuve componentes React reutilizables y responsivos en Arc XP, con Sass y AMP.',
          'Ajusté un proyecto Angular de elecciones: actualicé el punto de datos del año sobre la misma estructura y modifiqué piezas del framework.',
          'Integré Web Components de charts estadísticos entregados como dependencia.',
          'Participé en decisiones técnicas, code reviews, pair programming y mentoría a perfiles junior.',
          'Optimicé el procesamiento de imágenes del ecosistema Arc XP a escala de medio nacional.',
        ],
      },
      {
        role: 'Desarrollador Java Web',
        company: 'Hospital General de Jaén',
        period: 'Oct 2021 — Dic 2021',
        bullets: [
          'Desarrollé funcionalidades en OpenClinic (Java, JSP, Servlets y JavaScript) para la digitalización de exámenes e historias clínicas.',
        ],
      },
      {
        role: 'Desarrollador Full-Stack',
        company: 'LOT Internacional',
        period: 'Dic 2020 — Oct 2021',
        bullets: [
          'Desarrollé el frontend de una plataforma de auditorías ISO con React, consumiendo APIs REST sobre Node.js, Express y PostgreSQL.',
          'Implementé otra interfaz de cobranzas con React, Redux Thunk, Material UI y Axios.',
        ],
      },
    ],
  },
}
