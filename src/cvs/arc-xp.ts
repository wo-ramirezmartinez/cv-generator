import { withBase } from "../model/base";
import type { CvEntry } from "../model/types";

/** Recorte Arc XP para medios (Grupo Clarín, La Nación y similares). La fuente larga sigue en `md/`. */

export const arcXpCv: CvEntry = {
  id: "arc-xp",
  jobTitle: "Front-End · Arc XP para medios",
  headline: "Desarrollador Front-End · Arc XP Expert",
  company: "Medios digitales (Grupo Clarín, La Nación, etc.)",
  fileTag: "ARCXP",
  createdAt: "2026-11-27",
  notes: [
    {
      topic: "Arc XP: Fusion, PageBuilder, Composer, Content Sources, resolvers",
      status: "directo",
      detail: "Ingala e Infobae. Fusion lo confirmó el usuario en su LinkedIn.",
    },
    {
      topic: "SDK de suscripciones e identity",
      status: "directo",
      detail: "Varios medios migrados en Ingala.",
    },
    {
      topic: "Medios",
      status: "confirmado",
      detail:
        "La Cuarta sale del LinkedIn del usuario. Infobae (AR) va con peso porque el destino son medios argentinos.",
    },
    {
      topic: "Lighthouse",
      status: "confirmado",
      detail: "Estándar obligatorio de entrega, con SEO siempre en 100. Sin cifras por device en el CV.",
    },
    {
      topic: "Migración SQL → Arc XP",
      status: "confirmado",
      detail:
        "Análisis de BDD sin documentación de relaciones y mapeo al esquema. El pase a carga lo hacía un compañero.",
    },
    {
      topic: "PocketBase, Lambda, landings en S3",
      status: "omitido",
      detail: "Son de perfil full-stack y AWS. Aquí se prioriza Arc XP para que quepa en A4.",
    },
    {
      topic: "Inglés",
      status: "omitido",
      detail: "Medios argentinos que publican en español; la regla es idiomas vacíos salvo pedido.",
    },
    {
      topic: "Hospital General de Jaén",
      status: "omitido",
      detail: "3 meses en Java/salud. Poco relevante para medios Arc XP; se saca para aligerar.",
    },
  ],
  profile: withBase({
    headline: "Desarrollador Front-End · Arc XP Expert",
    summary:
      "Desarrollador Front-End con más de 5 años en React, más de 4 de ellos en medios digitales, especializado en Arc XP. He implementado soluciones sobre arquitecturas de equipo y productos propios, con estándares, code reviews y entregas incrementales. Cumplo estándares de rendimiento, accesibilidad y SEO, y dejo a los equipos editoriales y técnicos listos para operarlos.",
    skills: [
      "Arc XP (Fusion)",
      "PageBuilder y Composer",
      "Content Sources y resolvers",
      "SDK Arc XP (suscripciones e identity)",
      "React",
      "JavaScript (ES6+)",
      "HTML / CSS / Sass",
      "AMP",
      "Web performance (Lighthouse)",
      "SEO y accesibilidad web",
      "GTM / GA / data layer",
      "Node.js",
      "APIs REST",
      "Git / code review",
    ],
    languages: [],
    experience: [
      {
        role: "Desarrollador Front-End | Arc XP Expert",
        company: "Ingala Tech",
        period: "Jun 2024 — Ago 2026",
        bullets: [
          "Migré y evolucioné hacia Arc XP medios de alta audiencia (La Tercera, La Cuarta, El Heraldo, El Cronista, El Universal, La Razón, Level Up, entre otros), desde ajustes de interfaz hasta rediseños completos.",
          "Desarrollé componentes y templates modulares con React y Fusion para homepages, notas, secciones y tags, listos para que los editores armen las páginas desde PageBuilder.",
          "Construí la capa de datos de cada sitio con Content Sources y resolvers sobre APIs REST, organizada por tipo de contenido.",
          "Analicé bases relacionales sin documentación de relaciones (SQL Server, MySQL, PostgreSQL y Oracle) para identificar los datos clave de cada medio y mapearlos al esquema de contenido de Arc XP.",
          "Integré el SDK de suscripciones e identity de Arc XP en varios de los medios migrados.",
          "Entregué los sitios con el estándar obligatorio de Lighthouse: puntajes altos en rendimiento, accesibilidad y buenas prácticas, y SEO siempre en 100.",
          "Implementé Google Tag Manager, Google Analytics y data layers para medir interacciones clave del sitio.",
          "Capacité a editores en Composer y PageBuilder, y a programadores en la estructura del código, para operar y mantener cada sitio tras la entrega.",
        ],
      },
      {
        role: "Desarrollador Front-End",
        company: "Infobae",
        period: "Ene 2022 — Jun 2024",
        bullets: [
          "Desarrollé y mantuve componentes React reutilizables y responsivos para el sitio de Infobae sobre Arc XP, con Sass y AMP.",
          "Optimicé el procesamiento de imágenes de Arc XP para sostener la carga del sitio a escala de medio nacional.",
          "Desarrollé servicios Node.js para coberturas en vivo (Mundial y elecciones en Argentina), normalizando los datos de origen para su consumo en el sitio.",
          "Integré en el sitio módulos Angular de elecciones vía iframe y charts estadísticos como Web Components.",
          "Mentoré a desarrolladores junior y participé en decisiones de arquitectura front, code reviews y pair programming.",
        ],
      },
      {
        role: "Desarrollador Full-Stack",
        company: "LOT Internacional",
        period: "Dic 2020 — Oct 2021",
        bullets: [
          "Desarrollé una plataforma full-stack de auditorías ISO 9001, 14001 y 21001 con React, Node.js, Express y PostgreSQL.",
          "Implementé autenticación, roles y permisos sobre APIs REST.",
          "Construí una segunda plataforma de cobranzas con React, Node.js, Express y MongoDB.",
        ],
      },
    ],
  }),
};
