import { Link } from 'react-router'
import { listCvs } from '../cvs'
import './CvListPage.css'

function formatCreatedAt(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  if (!year || !month || !day) return isoDate

  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(year, month - 1, day))
}

export default function CvListPage() {
  const entries = listCvs()

  return (
    <main className="cv-list">
      <div className="cv-list-panel">
        <header className="cv-list-header">
          <p className="cv-list-eyebrow">CV Generator</p>
          <h1 className="cv-list-title">Mis CVs</h1>
          <p className="cv-list-subtitle">
            Recortes listos para postular. Abre uno para previsualizar y exportar
            a PDF.
          </p>
        </header>

        {entries.length === 0 ? (
          <p className="cv-list-empty">Todavía no hay CVs registrados.</p>
        ) : (
          <ul className="cv-list-items">
            {entries.map((entry) => (
              <li key={entry.id}>
                <Link className="cv-list-item" to={`/cv/${entry.id}`}>
                  <span className="cv-list-item-accent" aria-hidden />
                  <span className="cv-list-item-main">
                    <span className="cv-list-item-job">{entry.jobTitle}</span>
                    <span className="cv-list-item-headline">{entry.headline}</span>
                    <span className="cv-list-item-company">{entry.company}</span>
                  </span>
                  <span className="cv-list-item-meta">
                    <time dateTime={entry.createdAt}>
                      {formatCreatedAt(entry.createdAt)}
                    </time>
                    <span className="cv-list-item-arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
