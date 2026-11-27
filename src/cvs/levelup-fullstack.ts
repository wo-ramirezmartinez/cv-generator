import { withBase } from "../model/base";
import type { CvEntry } from "../model/types";

/**
 * Recorte levelUp — Senior Fullstack React/Node + AWS.
 * El post solo trae el título (remoto, sin inglés, USD).
 * AWS: confirmado por el usuario (S3/ACM en landings; Lambda en Infobae, sin pase a prod).
 */

export const levelupFullstackCv: CvEntry = {
  id: "levelup-fullstack",
  jobTitle: "Senior Fullstack React/Node + AWS",
  headline: "Desarrollador Full-Stack · React, Node.js y AWS",
  company: "levelUp",
  fileTag: "LEVELUP",
  createdAt: "2026-11-24",
  notes: [
    {
      topic: "React, Node.js, Express, REST",
      status: "directo",
      detail: "Ingala, Infobae y LOT. El post no trae más requisitos que el título.",
    },
    {
      topic: "PostgreSQL, MongoDB, SQL",
      status: "directo",
      detail: "LOT (PERN/MERN) y migraciones en Ingala.",
    },
    {
      topic: "AWS S3 y Certificate Manager",
      status: "confirmado",
      detail:
        "Landings de hoteles en Astro, desplegadas con S3 + Cloudflare + certificado SSL de AWS. No hay empleador en md/; va en skills y en el resumen, sin empresa nueva.",
    },
    {
      topic: "AWS Lambda",
      status: "confirmado",
      detail:
        "Infobae: desarrolló servicios que corrían en Lambda (pase a prod de otro equipo). Ingala: PocketBase quedó en Lambda a cargo de un compañero; él implementó el SDK.",
    },
    {
      topic: "PocketBase (medio gamer)",
      status: "confirmado",
      detail:
        "Clasificó users; un compañero armó el banco SQLite y dejó PocketBase en Lambda. Él integró el SDK (likes, comentarios anidados, puntuación). El CV no menciona al compañero ni nombra el medio LevelUp.",
    },
    {
      topic: "Migración SQL → Arc XP",
      status: "confirmado",
      detail:
        "Evaluación exhaustiva de BDD sin guía de relaciones; mapeo al esquema Arc XP. El pase a carga lo hacía un compañero. El CV no lo dice: al reclutador le importa el mapeo.",
    },
    {
      topic: "Capacitación Ingala",
      status: "confirmado",
      detail:
        "Editores (páginas, templates, resolvers) cuando no había TI; programadores con nociones técnicas, código y Q&A.",
    },
    {
      topic: "Lighthouse",
      status: "confirmado",
      detail:
        "Estándar obligatorio de entrega: puntajes altos en las cuatro categorías y SEO siempre en 100. Sin cifras por device.",
    },
    {
      topic: "Gestor multimedia Node.js",
      status: "omitido",
      detail:
        "Confirmado en md/, bullet aparte posible. En este recorte se priorizó PocketBase/SDK por espacio A4; no era indispensable.",
    },
    {
      topic: "Cloudflare",
      status: "confirmado",
      detail: "CDN del mismo despliegue de landings. No está en el título; se lista porque es parte de ese pase.",
    },
    {
      topic: "Astro",
      status: "omitido",
      detail: "Stack de esas landings. La vacante pide React; no se lista Astro.",
    },
    {
      topic: "Inglés",
      status: "omitido",
      detail: "El post dice sin inglés.",
    },
    {
      topic: "Certificación AWS",
      status: "omitido",
      detail: "“aws certified” era el certificado SSL (ACM), no una credencial de AWS.",
    },
  ],
  profile: withBase({
    headline: "Desarrollador Full-Stack · React, Node.js y AWS",
    summary:
      "Desarrollador con más de 5 años de experiencia en software, con foco en React y en backends con Node.js y APIs REST. He implementado soluciones sobre arquitecturas de equipo y productos propios, con estándares, code reviews y entregas incrementales. He desplegado sitios en la nube y desarrollado servicios serverless.",
    skills: [
      "React",
      "Node.js",
      "AWS (S3, Certificate Manager, Lambda)",
      "JavaScript",
      "Express",
      "APIs REST",
      "PocketBase",
      "PostgreSQL",
      "MongoDB",
      "Cloudflare",
      "HTML / CSS / Sass",
      "Git / PRs / code review",
    ],
    languages: [],
    experience: [
      {
        role: "Desarrollador Front-End | Arc XP Expert",
        company: "Ingala Tech",
        period: "Jun 2024 — Ago 2026",
        bullets: [
          "Desarrollé interfaces y templates modulares en React para migrar medios de alta audiencia (La Tercera, El Heraldo, El Cronista, El Universal y La Razón).",
          "Construí la capa de datos de cada sitio con Content Sources y resolvers sobre APIs REST, organizada por tipo de contenido.",
          "Analicé bases relacionales sin documentación de relaciones (SQL Server, MySQL, PostgreSQL y Oracle) para identificar los datos clave de cada medio y mapearlos al esquema de Arc XP.",
          "Integré PocketBase como fuente de datos para usuarios, comentarios y puntuaciones, y consumí esa información desde el cliente con su SDK.",
          "Entregué los sitios migrados con el estándar obligatorio de Lighthouse: puntajes altos en rendimiento, accesibilidad y buenas prácticas, y SEO siempre en 100.",
          "Capacité a editores y programadores de cada medio para operar y mantener el sitio tras la entrega, desde la gestión de páginas hasta la estructura del código.",
        ],
      },
      {
        role: "Desarrollador Front-End",
        company: "Infobae",
        period: "Ene 2022 — Jun 2024",
        bullets: [
          "Desarrollé y mantuve componentes React reutilizables y responsivos en un medio de alta audiencia, con Sass y AMP.",
          "Desarrollé servicios Node.js para coberturas en vivo (Mundial y elecciones), normalizando los datos de origen para su consumo en el sitio.",
          "Optimización de imágenes y servicios de contenido del ecosistema Arc XP a escala de medio nacional.",
          "Mentoré a desarrolladores junior y participé en decisiones técnicas, code reviews y pair programming.",
        ],
      },
      {
        role: "Desarrollador Java Web",
        company: "Hospital General de Jaén",
        period: "Oct 2021 — Dic 2021",
        bullets: [
          "Desarrollé funcionalidades en OpenClinic (Java, JSP y Servlets) para digitalizar exámenes e historias clínicas, en un proyecto respaldado por el Gobierno Regional de Cajamarca.",
        ],
      },
      {
        role: "Desarrollador Full-Stack",
        company: "LOT Internacional",
        period: "Dic 2020 — Oct 2021",
        bullets: [
          "Desarrollé una plataforma full-stack de auditorías ISO 9001, 14001 y 21001 con React, Node.js, Express y PostgreSQL.",
          "Implementé autenticación, roles, permisos y gestión de clientes y empresas sobre APIs REST.",
          "Construí una plataforma de registro y seguimiento de cobranzas con React, Node.js, Express y MongoDB.",
        ],
      },
    ],
  }),
};
