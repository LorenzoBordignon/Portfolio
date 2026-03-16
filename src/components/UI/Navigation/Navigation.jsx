import "./Navigation.css";

export function Navigation({ isOpen, onClose }) {
  return (
    <nav className={`nav ${isOpen ? "nav-open" : ""}`} id="nav-page-group">
      <p className="nav-title">
        <a href="#inicio" onClick={onClose}>
          Início
        </a>
      </p>
      <ul className="nav-page-group">
        <li className="nav-page">
          <a href="#sobre-mim" onClick={onClose}>
            Sobre Mim
          </a>
        </li>
      </ul>
      <p className="nav-title">
        <a href="#react-hooks" onClick={onClose}>
          React Hooks
        </a>
      </p>
      <ul className="nav-page-group">
        <li className="nav-page">
          <a href="#use-state" onClick={onClose}>
            UseState
          </a>
        </li>
        <li className="nav-page">
          <a href="#use-effect" onClick={onClose}>
            UseEffect
          </a>
        </li>
        <li className="nav-page nav-page-disabled">
          <a href="#em-breve" onClick={onClose}>
            Em breve
          </a>
        </li>
      </ul>
    </nav>
  );
}
