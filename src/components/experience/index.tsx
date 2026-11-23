import type { CvProfile } from "../../model/types";
import "./index.css";

const ExperienceComponent = ({ cv }: { cv: CvProfile }) => {
  const { experience } = cv;

  return (
    <section className="experience">
      <h2 className="experience-title">Experiencia</h2>
      {experience.map((job) => (
        <article className="experience-job" key={`${job.company}-${job.period}`}>
          <header className="experience-job-header">
            <h3 className="experience-job-title">
              {job.role}
              <span>{job.company}</span>
            </h3>
            <p className="experience-job-period">{job.period}</p>
          </header>
          <ul className="experience-job-bullets">
            {job.bullets.map((bullet) => (
              <li className="experience-job-bullet" key={bullet}>
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default ExperienceComponent;
