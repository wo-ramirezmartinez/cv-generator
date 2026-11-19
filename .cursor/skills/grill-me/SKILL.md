---
name: grill-me
description: >-
  Interroga requisitos del generador de CV (alcance, datos, plantillas, exportación,
  privacidad y UX) con una pregunta afilada a la vez y opciones concretas A/B.
  Usar cuando el usuario pida "grill me", aclarar requisitos, definir el producto
  o cerrar ambigüedades antes de implementar features en cv-generator.
---

# Grill Me (cv-generator)

## Límites

- **Sin código** durante la sesión: no editar fuente, no ejecutar comandos de implementación.
- **Sin asumir**: si hay dos lecturas válidas, es ambigüedad; hay que resolverla con el usuario.
- **Una pregunta por turno**; esperar respuesta antes de la siguiente.
- Cada pregunta incluye **opciones concretas** (trade-offs A/B o más), no preguntas vagas.

## Áreas típicas a interrogar

| Área | Ejemplos de huecos |
|------|---------------------|
| Modelo de datos | Secciones obligatorias, múltiples CVs, versiones |
| Plantillas | Cantidad, personalización (colores/fuentes), vista previa |
| Exportación | PDF, DOCX, impresión, calidad, márgenes A4/Letter |
| Persistencia | Solo local (localStorage), cuenta/nube, importar JSON |
| Idioma | UI vs contenido del CV, fechas y formatos regionales |
| Privacidad | Datos sensibles, telemetría, sin backend |
| Flujo UX | Wizard vs una página, autoguardado, deshacer |

## Formato de pregunta

**Mala:** "¿Cómo quieres exportar el CV?"

**Buena:** "Para la v1, ¿prefieres **(A)** exportar solo **PDF** generado en el cliente (sin servidor), o **(B)** ofrecer **PDF + imprimir** desde el navegador y dejar DOCX para una v2?"

## Cierre de sesión

Cuando no queden bloqueadores, entregar un **Informe de clarificación**:

```markdown
## Informe de clarificación: CV Generator

### Decisiones tomadas
- [Tema]: [decisión acordada]

### Edge cases acordados
- [Escenario]: [comportamiento]

### Fuera de alcance (v1)
- …

### Próximo paso
- Actualizar README o spec del repo con estas decisiones antes de codificar.
```

## Invocación

El usuario dice **"grill me"**, **"interrógame"** o pide definir requisitos del CV: iniciar por el bloqueador más crítico (normalmente modelo de datos + exportación v1).