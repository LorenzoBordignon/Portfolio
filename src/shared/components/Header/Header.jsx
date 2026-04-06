import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { appRoutes } from "../../../app/routes";
import "./Header.css";

export function Header({ isMenuOpen, onToggleMenu, nomePortfolio }) {
  return (
    <header className="header">
      <div className="header-title">
        <button
          type="button"
          className="header-menu-toggle"
          onClick={onToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-page-group"
          title={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <GiHamburgerMenu />
        </button>
        <Link className="header-home-link" to={appRoutes.home}>
          {nomePortfolio}
        </Link>
      </div>
    </header>
  );
}
