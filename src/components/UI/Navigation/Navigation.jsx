import "./Navigation.css";
import { NavLink } from "./NavLink";

export function Navigation({ isOpen }) {
  return (
    <nav className={`nav ${isOpen ? "nav-open" : ""}`} id="nav-page-group">
      <p className="nav-title">Início</p>
      <ul className="nav-page-group">
        <NavLink linkAddress="#sobre-mim" linkName="Sobre Mim" />
      </ul>
      <p className="nav-title">React Hooks</p>
      <ul className="nav-page-group">
        <NavLink linkAddress="#use-state" linkName="UseState" />
        <NavLink linkAddress="#use-effect" linkName="UseEffect" />
      </ul>
    </nav>
  );
}
