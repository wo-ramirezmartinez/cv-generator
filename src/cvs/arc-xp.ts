import type { CvProfile } from "./types";

/** Recorte Arc XP (énfasis plataforma). La fuente larga sigue en `md/`. */

export const arcXpCv: CvProfile = {
  name: "William Ramirez",
  headline: "Desarrollador Front-End · Arc XP Expert",
  location: "Pimentel, Lambayeque, Perú",
  summary:
    "Desarrollador Front-End especializado en React y ArcXP, con más de 4 años de experiencia en desarrollo y migración de sitios digitales. Especializado en web performance, accesibilidad, responsive design y desarrollo de componentes reutilizables, con experiencia en la implementación de soluciones de alto rendimiento para proyectos digitales. ",
  contact: [
    {
      label: "wo.ramirezmartinez@gmail.com",
      href: "mailto:wo.ramirezmartinez@gmail.com",
      kind: "email",
    },
    {
      label: "+51 926 206 624",
      href: "tel:+51926206624",
      kind: "phone",
    },
    {
      label: "linkedin.com/in/williamrmz",
      href: "https://www.linkedin.com/in/williamrmz/",
      kind: "linkedin",
    },
    {
      label: "github.com/williamrmz",
      href: "https://github.com/williamrmz",
      kind: "github",
    },
  ],
  skills: [
    "React",
    "JavaScript (ES6+)",
    "HTML y CSS",
    "Sass",
    "Arc XP",
    "Composer",
    "PageBuilder",
    "Content Sources",
    "Resolvers",
    "Node.js",
    "APIs REST",
    "Web performance",
  ],
  education: [
    {
      title: "Ingeniería de Sistemas y Computación",
      institution: "Universidad Católica Santo Toribio de Mogrovejo",
      year: "2019",
    },
  ],
  languages: [
    {
      name: "Inglés",
      detail: "Intermedio (lectura y escritura técnicas)",
    },
  ],
  experience: [
    {
      role: "Desarrollador Front-End | Arc XP Expert",
      company: "Ingala Tech",
      period: "Jun 2024 — Ago 2026",
      bullets: [
        "Migración y evolución de medios de alta audiencia (La Tercera, El Heraldo, El Cronista, El Universal, LevelUp y La Razón) con React y Arc XP.",
        "Arquitectura de templates modulares y componentes reutilizables (home, nota, sección y tags) integrados con Content Sources y resolvers.",
        "Personalización de Composer y PageBuilder, y capacitación a equipos editoriales y técnicos.",
        "Optimización de rendimiento y reuso de componentes; en La Tercera, Lighthouse ~90 desktop y ~80 mobile, con 100 en accesibilidad, SEO y best practices.",
      ],
    },
    {
      role: "Desarrollador Front-End",
      company: "Infobae",
      period: "Ene 2022 — Jun 2024",
      bullets: [
        "Desarrollo y mantenimiento de componentes React reutilizables y responsivos para Infobae en Arc XP, con Sass y AMP.",
        "Optimización de imágenes y servicios de contenido del ecosistema Arc XP a escala de medio nacional.",
        "Participación en arquitectura front, decisiones técnicas, code reviews y pair programming.",
        "Mentoría a desarrolladores junior y onboarding de perfiles nuevos.",
      ],
    },
    {
      role: "Desarrollador Java Web",
      company: "Hospital General de Jaén",
      period: "Oct 2021 — Dic 2021",
      bullets: [
        "Desarrollo en OpenClinic para digitalización de exámenes y automatización de historias clínicas (Java, JSP, Servlets y JavaScript).",
      ],
    },
    {
      role: "Desarrollador Full-Stack",
      company: "LOT Internacional",
      period: "Dic 2020 — Oct 2021",
      bullets: [
        "Desarrollo full-stack de una plataforma de auditorías ISO 9001, 14001 y 21001 con React, Node.js, Express y PostgreSQL.",
      ],
    },
  ],
};
