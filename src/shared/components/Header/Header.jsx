import { Link } from "react-router-dom";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { appRoutes } from "../../../app/routes";
import "./Header.css";

export function Header({
  isMenuOpen,
  onChangeTheme,
  onToggleMenu,
  nomePortfolio,
  portfolioKicker,
  projectStatusLabel,
  themeName,
}) {
  return (
    <header className="header">
      <div className="header-brand">
        <button
          type="button"
          className="header-menu-toggle"
          onClick={onToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-page-group"
          title={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <HiOutlineSquares2X2 />
        </button>
        <div className="header-title">
          <span className="header-kicker">{portfolioKicker}</span>
          <Link className="header-home-link" to={appRoutes.home}>
            {nomePortfolio}
          </Link>
        </div>
      </div>

      <div className="header-actions">
        <div className="header-theme-switch" role="group" aria-label="Tema">
          <button
            type="button"
            className={`header-theme-button ${
              themeName === "warm" ? "is-active" : ""
            }`}
            aria-pressed={themeName === "warm"}
            onClick={() => onChangeTheme("warm")}
          >
            Quente
          </button>
          <button
            type="button"
            className={`header-theme-button ${
              themeName === "cold" ? "is-active" : ""
            }`}
            aria-pressed={themeName === "cold"}
            onClick={() => onChangeTheme("cold")}
          >
            Frio
          </button>
        </div>
        <span className="header-status">
          <span className="header-status-dot" />
          {projectStatusLabel}
        </span>
        <Link className="header-cta" to={appRoutes.contato}>
          Contato
        </Link>
      </div>
    </header>
  );
}
