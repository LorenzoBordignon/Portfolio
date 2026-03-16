import "devextreme/dist/css/dx.light.css";
import { useState } from "react";
import "./reset.css";
import "./App.css";
import { Header } from "./components/UI/Header/Header";
import { Navigation } from "./components/UI/Navigation/Navigation";
import { Page } from "./components/UI/Page/Page";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className={`app-shell ${
        isMenuOpen ? "app-shell-menu-open" : "app-shell-menu-closed"
      }`}
    >
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((currentState) => !currentState)}
      />
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="main-page">
        <Page />
      </div>
    </section>
  );
}

export default App;
