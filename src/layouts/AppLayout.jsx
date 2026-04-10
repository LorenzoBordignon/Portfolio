import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../shared/components/Header/Header";
import { Navigation } from "../shared/components/Navigation/Navigation";
import "./AppLayout.css";

export function AppLayout() {
  const location = useLocation();
  const [menuState, setMenuState] = useState({
    isOpen: false,
    pathname: location.pathname,
  });
  const isMenuOpen =
    menuState.pathname === location.pathname ? menuState.isOpen : false;

  function toggleMenu() {
    setMenuState((currentState) => ({
      isOpen:
        currentState.pathname === location.pathname
          ? !currentState.isOpen
          : true,
      pathname: location.pathname,
    }));
  }

  function closeMenu() {
    setMenuState({
      isOpen: false,
      pathname: location.pathname,
    });
  }

  return (
    <section
      className={`app-shell ${
        isMenuOpen ? "app-shell-menu-open" : "app-shell-menu-closed"
      }`}
    >
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        nomePortfolio="Portfolio Lorenzo Historico"
      />
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <main className="main-page">
        <Outlet />
      </main>
    </section>
  );
}
