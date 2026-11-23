import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import AsideComponent from '../components/aside'
import ExperienceComponent from '../components/experience'
import HeaderComponent from '../components/header'
import { getCvById } from '../cvs'
import type { CvCoverageStatus } from '../model/types'
import '../App.css'
import './CvDetailPage.css'

const A4_PX = (297 * 96) / 25.4

const statusLabel: Record<CvCoverageStatus, string> = {
  directo: 'Directo',
  afin: 'Afín',
  confirmado: 'Confirmado',
  omitido: 'Omitido',
}

function pdfFileName(fileTag: string): string {
  const slug = fileTag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Za-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')

  return `CV_William_${slug}`
}

export default function CvDetailPage() {
  const { id } = useParams<{ id: string }>()
  const entry = id ? getCvById(id) : undefined
  const [overflowMm, setOverflowMm] = useState(0)

  useEffect(() => {
    if (!entry) return

    const previous = document.title
    document.title = pdfFileName(entry.fileTag)

    return () => {
      document.title = previous
    }
  }, [entry])

  useEffect(() => {
    const sheet = document.querySelector('.cv')
    if (!sheet) return

    const measure = () => {
      const extra = sheet.scrollHeight - A4_PX
      setOverflowMm(extra > 2 ? Math.ceil((extra * 25.4) / 96) : 0)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(sheet)
    return () => observer.disconnect()
  }, [entry])

  if (!entry) {
    return (
      <main className="cv-detail-missing">
        <h1>CV no encontrado</h1>
        <p>No hay un recorte con el id “{id}”.</p>
        <Link className="cv-detail-back" to="/">
          <span className="cv-detail-back-icon" aria-hidden>
            ←
          </span>
          Volver al listado
        </Link>
      </main>
    )
  }

  const { profile } = entry

  return (
    <div className="cv-container">
      <div className="cv-screen-only cv-detail-toolbar">
        <Link className="cv-detail-back" to="/">
          <span className="cv-detail-back-icon" aria-hidden>
            ←
          </span>
          Atrás
        </Link>

        <div className="cv-detail-job-wrap">
          <p className="cv-detail-job-label">Puesto</p>
          <p className="cv-detail-job" title={entry.jobTitle}>
            {entry.jobTitle}
          </p>
        </div>

        <button className="cv-button-download" type="button" onClick={() => window.print()}>
          Guardar PDF
        </button>
      </div>

      {overflowMm > 0 ? (
        <p className="cv-screen-only cv-overflow" role="status">
          Este CV se pasa de una hoja A4 por unos {overflowMm} mm. Recorta viñetas
          antes de exportar.
        </p>
      ) : null}

      {entry.notes.length > 0 ? (
        <details className="cv-screen-only cv-notes">
          <summary>Notas de esta postulación ({entry.notes.length})</summary>
          <ul>
            {entry.notes.map((note) => (
              <li key={note.topic}>
                <span className={`cv-note cv-note-${note.status}`}>{statusLabel[note.status]}</span>
                <strong>{note.topic}.</strong> {note.detail}
              </li>
            ))}
          </ul>
        </details>
      ) : null}

      <article className="cv">
        <HeaderComponent cv={profile} />

        <div className="cv-columns">
          <AsideComponent cv={profile} />
          <ExperienceComponent cv={profile} />
        </div>
      </article>
    </div>
  )
}
