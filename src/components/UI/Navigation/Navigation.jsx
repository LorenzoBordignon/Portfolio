import "./Navigation.css";

export function Navigation({ isOpen, onClose }) {
  return (
    <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
      <p className="nav-title">React Hooks</p>
      <ul className="nav-page-group" id="nav-page-group">
        <li className="nav-page">
          <a href="#inicio" onClick={onClose}>
            Início
          </a>
        </li>
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
