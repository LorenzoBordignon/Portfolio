import "./Navigation.css";

export function NavLink({ linkName, linkAddress }) {
  return (
    <li className="nav-page">
      <a href={linkAddress}>
        {linkName}
      </a>
    </li>
  );
}
