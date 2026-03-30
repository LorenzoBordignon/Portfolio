import { Children } from "react";
import "./Page.css";

export function PageSectionGroup({
  sectionGroupId,
  sectionGroupTitle,
  children,
}) {
  return (
    <div className="page-content-group">
      <h2 className="page-title" id={sectionGroupId}>
        {sectionGroupTitle}
      </h2>
      {Children.map(children, (child, index) => (
        <section className="page-section" key={child?.key ?? index}>
          {child}
        </section>
      ))}
    </div>
  );
}
