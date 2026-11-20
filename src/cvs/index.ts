import { arcXpCv } from './arc-xp'
import type { CvEntry } from './types'

const cvEntries: CvEntry[] = [arcXpCv]

/** Listado ordenado: más reciente primero. */
export function listCvs(): CvEntry[] {
  return [...cvEntries].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export function getCvById(id: string): CvEntry | undefined {
  return cvEntries.find((entry) => entry.id === id)
}
