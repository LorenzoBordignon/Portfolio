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
      {Children.map(children, (child) => (
        <section className="page-section">{child}</section>
      ))}
    </div>
  );
}
