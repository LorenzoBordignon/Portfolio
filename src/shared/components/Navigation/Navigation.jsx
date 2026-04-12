import { navigationGroups } from "../../../app/routes";
import "./Navigation.css";
import { NavigationLink } from "./NavigationLink";

export function Navigation({ isOpen, onClose }) {
  return (
    <nav className={`nav ${isOpen ? "nav-open" : ""}`} id="nav-page-group">
      <div className="nav-intro">
        <p className="nav-kicker">Navegação</p>
        <h2 className="nav-headline">
          Conheça um pouco da minha história, dos meus valores e da melhor
          forma de falar comigo.
        </h2>
      </div>

      {navigationGroups.map((group) => (
        <div className="nav-group" key={group.title}>
          <p className="nav-title">{group.title}</p>
          <ul className="nav-page-group">
            {group.links.map((link, index) => (
              <NavigationLink
                key={link.to}
                indexLabel={`0${index + 1}`}
                linkDescription={link.description}
                linkName={link.label}
                linkAddress={link.to}
                onNavigate={onClose}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
