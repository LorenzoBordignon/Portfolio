import "./Page.css";

export function Page({
  eyebrow,
  title,
  description,
  actions,
  heroAside,
  heroStats,
  children,
}) {
  return (
    <div className="page">
      <div className="page-content">
        {(eyebrow || title || description) && (
          <header className="page-hero">
            <div className="page-hero-main">
              {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
              {title && <h1 className="page-heading">{title}</h1>}
              {description && (
                <p className="page-description">{description}</p>
              )}
              {actions && <div className="page-action-row">{actions}</div>}
              {heroStats?.length ? (
                <div className="page-hero-metrics">
                  {heroStats.map((stat) => (
                    <div className="page-hero-metric" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {heroAside ? (
              <aside className="page-hero-aside">{heroAside}</aside>
            ) : null}
          </header>
        )}
        {children}
        <div className="page-end-spacer" aria-hidden="true" />
      </div>
    </div>
  );
}
