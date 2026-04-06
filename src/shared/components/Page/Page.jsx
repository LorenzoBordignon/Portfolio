import "./Page.css";

export function Page({ eyebrow, title, description, children }) {
  return (
    <div className="page">
      <div className="page-content">
        {(eyebrow || title || description) && (
          <header className="page-hero">
            {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
            {title && <h1 className="page-heading">{title}</h1>}
            {description && <p className="page-description">{description}</p>}
          </header>
        )}
        {children}
        <div className="page-end-spacer" aria-hidden="true" />
      </div>
    </div>
  );
}
