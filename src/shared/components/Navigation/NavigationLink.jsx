import { NavLink as RouterNavLink } from "react-router-dom";
import "./Navigation.css";

export function NavigationLink({ linkName, linkAddress, onNavigate }) {
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
        {linkName}
      </RouterNavLink>
    </li>
  );
}
