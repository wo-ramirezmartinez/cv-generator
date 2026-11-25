import { arcXpCv } from './arc-xp'
import { bcpFrontendCv } from './bcp-frontend'
import { levelupFullstackCv } from './levelup-fullstack'
import { tivitFullstackCv } from './tivit-fullstack'
import type { CvEntry } from '../model/types'

const cvEntries: CvEntry[] = [arcXpCv, tivitFullstackCv, bcpFrontendCv, levelupFullstackCv]

/** Listado ordenado: más reciente primero. */
export function listCvs(): CvEntry[] {
  return [...cvEntries].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export function getCvById(id: string): CvEntry | undefined {
  return cvEntries.find((entry) => entry.id === id)
}
