import { withBase } from '../model/base'
import type { CvEntry } from '../model/types'

/** Recorte Arc XP (énfasis plataforma). La fuente larga sigue en `md/`. */

export const arcXpCv: CvEntry = {
  id: 'arc-xp',
  jobTitle: 'Front-End · Arc XP',
  headline: 'Desarrollador Front-End · Arc XP Expert',
  company: 'Plantilla / portfolio',
  fileTag: 'ARCXP',
  createdAt: '2026-11-19',
  notes: [
    {
      topic: 'Uso',
      status: 'directo',
      detail: 'Plantilla de portafolio, no una postulación. El énfasis es Arc XP.',
    },
  ],
  profile: withBase({
    headline: 'Desarrollador Front-End · Arc XP Expert',
    summary:
      'Desarrollador Front-End especializado en React y ArcXP, con más de 4 años de experiencia en desarrollo y migración de sitios digitales. Especializado en web performance, accesibilidad, responsive design y desarrollo de componentes reutilizables, con experiencia en la implementación de soluciones de alto rendimiento para proyectos digitales. ',
    skills: [
      'React',
      'JavaScript (ES6+)',
      'HTML y CSS',
      'Sass',
      'Arc XP',
      'Composer',
      'PageBuilder',
      'Content Sources',
      'Resolvers',
      'Node.js',
      'APIs REST',
      'Web performance',
    ],
    languages: [
      {
        name: 'Inglés',
        detail: 'Intermedio (lectura y escritura técnicas)',
      },
    ],
    experience: [
      {
        role: 'Desarrollador Front-End | Arc XP Expert',
        company: 'Ingala Tech',
        period: 'Jun 2024 — Ago 2026',
        bullets: [
          'Migración y evolución de medios de alta audiencia (La Tercera, El Heraldo, El Cronista, El Universal, LevelUp y La Razón) con React y Arc XP.',
          'Arquitectura de templates modulares y componentes reutilizables (home, nota, sección y tags) integrados con Content Sources y resolvers.',
          'Personalización de Composer y PageBuilder, y capacitación a equipos editoriales y técnicos.',
          'Optimización de rendimiento y reuso de componentes; en La Tercera, Lighthouse ~90 desktop y ~80 mobile, con 100 en accesibilidad, SEO y best practices.',
        ],
      },
      {
        role: 'Desarrollador Front-End',
        company: 'Infobae',
        period: 'Ene 2022 — Jun 2024',
        bullets: [
          'Desarrollo y mantenimiento de componentes React reutilizables y responsivos para Infobae en Arc XP, con Sass y AMP.',
          'Optimización de imágenes y servicios de contenido del ecosistema Arc XP a escala de medio nacional.',
          'Participación en arquitectura front, decisiones técnicas, code reviews y pair programming.',
          'Mentoría a desarrolladores junior y onboarding de perfiles nuevos.',
        ],
      },
      {
        role: 'Desarrollador Java Web',
        company: 'Hospital General de Jaén',
        period: 'Oct 2021 — Dic 2021',
        bullets: [
          'Desarrollo en OpenClinic para digitalización de exámenes y automatización de historias clínicas (Java, JSP, Servlets y JavaScript).',
        ],
      },
      {
        role: 'Desarrollador Full-Stack',
        company: 'LOT Internacional',
        period: 'Dic 2020 — Oct 2021',
        bullets: [
          'Desarrollo full-stack de una plataforma de auditorías ISO 9001, 14001 y 21001 con React, Node.js, Express y PostgreSQL.',
        ],
      },
    ],
  }),
}
