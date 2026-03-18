import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";

import "./Header.css";

export function Header({
  isMenuOpen,
  onToggleMenu,
  nomePortfolio,
  onLogoutSession,
}) {
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
        {nomePortfolio}
      </div>
      <button
        type="button"
        className="header-logout-btn"
        onClick={onLogoutSession}
        title="Sair"
      >
        <MdLogout className="logout-icon" />
      </button>
    </header>
  );
}
