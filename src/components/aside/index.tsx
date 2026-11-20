import type { CvProfile } from "../../cvs/types";
import "./index.css";

const AsideComponent = ({ cv }: { cv: CvProfile }) => {
  const { summary, skills, education, languages } = cv;

  return (
    <aside className="cv-aside">
      <section className="cv-aside-section cv-about">
        <h2 className="cv-about-title">Sobre mí</h2>
        <p className="cv-about-text">{summary}</p>
      </section>

      <section className="cv-aside-section cv-skills">
        <h2 className="cv-skills-title">Habilidades</h2>
        <ul className="cv-skills">
          {skills.map((skill) => (
            <li className="cv-skill" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="cv-aside-section cv-education">
        <h2 className="cv-education-heading">Formación</h2>
        {education.map((item) => (
          <p key={item.title}>
            <span className="cv-education-title-year">
              <strong className="cv-education-title">{item.title}</strong>
              <span className="cv-education-year">{item.year}</span>
            </span>
            <span className="cv-education-institution">{item.institution}</span>
          </p>
        ))}
      </section>

      {languages.length > 0 ? (
        <section className="cv-aside-section cv-languages">
          <h2 className="cv-languages-title">Idiomas</h2>
          {languages.map((item) => (
            <p key={item.name}>
              <strong>{item.name}</strong>
              <br />
              {item.detail}
            </p>
          ))}
        </section>
      ) : null}
    </aside>
  );
};

export default AsideComponent;
