import "./Navigation.css";

export function Navigation() {
  return (
    <nav className="nav">
      <p className="nav-title">React Hooks</p>
      <ul className="nav-page-group">
        <li className="nav-page">
          <a href="#use-state">UseState</a>
        </li>
        <li className="nav-page">
          <a href="#use-effect">UseEffect</a>
        </li>
        <li className="nav-page nav-page-disabled">
          <a href="#em-breve">Em breve</a>
        </li>
      </ul>
    </nav>
  );
}
