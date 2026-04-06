import { navigationGroups } from "../../../app/routes";
import "./Navigation.css";
import { NavigationLink } from "./NavigationLink";

export function Navigation({ isOpen, onClose }) {
  return (
    <nav className={`nav ${isOpen ? "nav-open" : ""}`} id="nav-page-group">
      {navigationGroups.map((group) => (
        <div className="nav-group" key={group.title}>
          <p className="nav-title">{group.title}</p>
          <ul className="nav-page-group">
            {group.links.map((link) => (
              <NavigationLink
                key={link.to}
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
