import { NavLink as RouterNavLink } from "react-router-dom";
import "./Navigation.css";

export function NavigationLink({
  indexLabel,
  linkName,
  linkAddress,
  linkDescription,
  onNavigate,
}) {
  return (
    <li className="nav-page">
      <RouterNavLink
        className={({ isActive }) =>
          `nav-page-link ${isActive ? "is-active" : ""}`
        }
        end={linkAddress === "/"}
        onClick={onNavigate}
        to={linkAddress}
      >
        <span className="nav-page-index">{indexLabel}</span>
        <span className="nav-page-copy">
          <strong className="nav-page-label">{linkName}</strong>
          <span className="nav-page-description">{linkDescription}</span>
        </span>
      </RouterNavLink>
    </li>
  );
}
