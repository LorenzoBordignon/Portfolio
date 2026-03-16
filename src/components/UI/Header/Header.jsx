import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

export function Header({ isMenuOpen, onToggleMenu, nomePortfolio }) {
  return (
    <header className="header">
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
      {nomePortfolio}
    </header>
  );
}
