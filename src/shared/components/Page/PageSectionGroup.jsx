import { Children } from "react";
import "./Page.css";

export function PageSectionGroup({ title, children }) {
  return (
    <section className="page-content-group">
      <h2 className="page-title">{title}</h2>
      {Children.map(children, (child, index) => (
        <section className="page-section" key={child?.key ?? index}>
          {child}
        </section>
      ))}
    </section>
  );
}
