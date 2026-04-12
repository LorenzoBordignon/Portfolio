import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../shared/components/Header/Header";
import { Navigation } from "../shared/components/Navigation/Navigation";
import "./AppLayout.css";

const THEME_STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME = "warm";

function getInitialTheme() {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return storedTheme === "cold" ? "cold" : DEFAULT_THEME;
}

export function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(() => window.innerWidth >= 1024);
  const [themeName, setThemeName] = useState(getInitialTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    function syncMenuState(event) {
      setIsMenuOpen(event.matches);
    }

    syncMenuState(mediaQuery);
    mediaQuery.addEventListener("change", syncMenuState);

    return () => {
      mediaQuery.removeEventListener("change", syncMenuState);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = themeName;
    window.localStorage.setItem(THEME_STORAGE_KEY, themeName);
  }, [themeName]);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  }

  function changeTheme(nextTheme) {
    setThemeName(nextTheme);
  }

  return (
    <section
      className={`app-shell ${
        isMenuOpen ? "app-shell-menu-open" : "app-shell-menu-closed"
      }`}
    >
      <div className="app-shell-backdrop" aria-hidden="true">
        <span className="app-shell-glow app-shell-glow-primary" />
        <span className="app-shell-glow app-shell-glow-secondary" />
        <span className="app-shell-grid" />
      </div>
      <Header
        isMenuOpen={isMenuOpen}
        onChangeTheme={changeTheme}
        onToggleMenu={toggleMenu}
        nomePortfolio="Lorenzo Bordignon"
        portfolioKicker="Portfólio"
        projectStatusLabel="Desenvolvedor Web - Júnior"
        themeName={themeName}
      />
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <main className="main-page">
        <Outlet />
      </main>
    </section>
  );
}
