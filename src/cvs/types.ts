/** Contrato compartido para cualquier recorte de CV en `src/cvs/`. */

export type CvContactKind = 'email' | 'phone' | 'linkedin' | 'github' | 'web'

export type CvLink = {
  label: string
  href: string
  kind: CvContactKind
}

export type CvEducation = {
  title: string
  institution: string
  year: string
}

export type CvLanguage = {
  name: string
  detail: string
}

export type CvExperience = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export type CvProfile = {
  name: string
  headline: string
  location: string
  summary: string
  contact: CvLink[]
  skills: string[]
  education: CvEducation[]
  languages: CvLanguage[]
  experience: CvExperience[]
}

/** Entrada de catálogo: metadata del listado + perfil exportable. */
export type CvEntry = {
  id: string
  jobTitle: string
  headline: string
  company: string
  createdAt: string // ISO date YYYY-MM-DD
  profile: CvProfile
}
