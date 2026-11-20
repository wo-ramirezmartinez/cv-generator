import type { CvProfile } from "../../cvs/types";
import avatar from "../../assets/images/will-small.png";
import { ContactKindIcon, LocationIcon } from "../icons/contact";
import "./index.css";

type HeaderProps = {
  cv: Pick<CvProfile, "name" | "headline" | "location" | "contact">;
};

const HeaderComponent = ({ cv }: HeaderProps) => {
  const { name, headline, location, contact } = cv;

  return (
    <header className="top-header">
      <img className="top-header-avatar" src={avatar} alt={name} />
      <section className="top-header-info">
        <h1>{name}</h1>
        <p className="top-header-headline">{headline}</p>
        <ul className="top-header-contact">
          <li className="top-header-contact-item">
            <LocationIcon className="top-header-contact-icon" />
            <span>{location}</span>
          </li>
          {contact.map((item) => {
            const isWeb = item.href.startsWith("http");

            return (
              <li className="top-header-contact-item" key={item.href}>
                <ContactKindIcon kind={item.kind} className="top-header-contact-icon" />
                <a
                  href={item.href}
                  {...(isWeb
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </header>
  );
};

export default HeaderComponent;
