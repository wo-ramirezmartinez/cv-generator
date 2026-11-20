import "./App.css";
import AsideComponent from "./components/aside";
import ExperienceComponent from "./components/experience";
import HeaderComponent from "./components/header";
import { arcXpCv } from "./cvs/arc-xp";

const cv = arcXpCv;

function App() {
  return (
    <div className="cv-container">
      <p className="cv-screen-only">
        <button className="cv-button-download" type="button" onClick={() => window.print()}>
          Guardar PDF
        </button>
        Chrome: márgenes en Ninguno y gráficos de fondo activados.
      </p>

      <article className="cv">
        <HeaderComponent cv={cv} />

        <div className="cv-columns">
          <AsideComponent cv={cv} />

          <ExperienceComponent cv={cv} />
        </div>
      </article>
    </div>
  );
}

export default App;
