import type { CvEducation, CvLink, CvProfile } from './types'

const contact: CvLink[] = [
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
]

const education: CvEducation[] = [
  {
    title: 'Ingeniería de Sistemas y Computación',
    institution: 'Universidad Católica Santo Toribio de Mogrovejo',
    year: '2019',
  },
]

/** Nombre, ciudad, contacto y formación. Igual en todos los recortes. */
export function withBase(
  cut: Omit<CvProfile, 'name' | 'location' | 'contact' | 'education'>,
): CvProfile {
  return {
    name: 'William Ramirez',
    location: 'Pimentel, Lambayeque, Perú',
    contact,
    education,
    ...cut,
  }
}
