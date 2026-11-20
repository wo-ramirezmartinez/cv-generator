import { Link, useParams } from 'react-router'
import AsideComponent from '../components/aside'
import ExperienceComponent from '../components/experience'
import HeaderComponent from '../components/header'
import { getCvById } from '../cvs'
import '../App.css'
import './CvDetailPage.css'

export default function CvDetailPage() {
  const { id } = useParams<{ id: string }>()
  const entry = id ? getCvById(id) : undefined

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

        <button
          className="cv-button-download"
          type="button"
          onClick={() => window.print()}
        >
          Guardar PDF
        </button>
      </div>

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
