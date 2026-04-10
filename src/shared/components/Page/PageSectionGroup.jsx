import { Children } from "react";
import "./Page.css";

export function PageSectionGroup({ eyebrow, title, description, children }) {
  return (
    <section className="page-content-group">
      {(eyebrow || title || description) && (
        <header className="page-section-head">
          {eyebrow ? <p className="page-section-eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="page-title">{title}</h2> : null}
          {description ? (
            <p className="page-section-description">{description}</p>
          ) : null}
        </header>
      )}
      {Children.map(children, (child, index) => (
        <section className="page-section" key={child?.key ?? index}>
          {child}
        </section>
      ))}
    </section>
  );
}
