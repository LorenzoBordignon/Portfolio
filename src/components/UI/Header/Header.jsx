import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

export function Header({ isMenuOpen, onToggleMenu }) {
  return (
    <header className="header">
      <button
        type="button"
        className="header-menu-toggle"
        onClick={onToggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="nav-page-group"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <GiHamburgerMenu />
      </button>
      <div className="logo">
        <img src="/logo.svg" alt="Logo do portfolio" />
      </div>
    </header>
  );
}
