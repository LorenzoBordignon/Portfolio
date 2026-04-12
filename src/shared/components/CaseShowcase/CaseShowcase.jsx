import { useState } from "react";
import { FiArrowRight, FiLayers, FiTrendingUp, FiZap } from "react-icons/fi";
import "./CaseShowcase.css";

export function CaseShowcase({ cases }) {
  const [activeCaseId, setActiveCaseId] = useState(cases[0]?.id);
  const activeCase =
    cases.find((caseItem) => caseItem.id === activeCaseId) ?? cases[0];

  return (
    <div className="case-showcase">
      <div className="case-showcase-tabs" role="tablist" aria-label="Cases">
        {cases.map((caseItem) => (
          <button
            key={caseItem.id}
            type="button"
            className={`case-showcase-tab ${
              caseItem.id === activeCase.id ? "is-active" : ""
            }`}
            onClick={() => setActiveCaseId(caseItem.id)}
            role="tab"
            aria-selected={caseItem.id === activeCase.id}
          >
            <span className="case-showcase-tab-tag">{caseItem.tag}</span>
            <strong>{caseItem.label}</strong>
            <span>{caseItem.microcopy}</span>
          </button>
        ))}
      </div>

      <div className="case-showcase-panel" role="tabpanel">
        <div className="case-showcase-header">
          <div className="case-showcase-copy">
            <span className="case-showcase-tag">{activeCase.tag}</span>
            <h3>{activeCase.title}</h3>
            <p>{activeCase.summary}</p>
          </div>

          <div className="page-chip-list">
            {activeCase.pillars.map((pillar) => (
              <span className="page-chip" key={pillar}>
                {pillar}
              </span>
            ))}
          </div>
        </div>

        <div className="case-showcase-metrics">
          {activeCase.metrics.map((metric) => (
            <div className="case-showcase-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="case-showcase-grid">
          <article className="case-showcase-card">
            <span className="case-showcase-card-icon">
              <FiZap />
            </span>
            <span className="case-showcase-card-label">Problema</span>
            <p>{activeCase.challenge}</p>
          </article>

          <article className="case-showcase-card">
            <span className="case-showcase-card-icon">
              <FiLayers />
            </span>
            <span className="case-showcase-card-label">Abordagem</span>
            <p>{activeCase.direction}</p>
          </article>

          <article className="case-showcase-card">
            <span className="case-showcase-card-icon">
              <FiTrendingUp />
            </span>
            <span className="case-showcase-card-label">Resultado</span>
            <p>{activeCase.outcome}</p>
          </article>
        </div>

        <div className="case-showcase-columns">
          <div className="case-showcase-column">
            <h4>Entregas no código</h4>
            <ul className="page-list">
              {activeCase.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-showcase-column">
            <h4>Decisões técnicas</h4>
            <ul className="page-list">
              {activeCase.levers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-showcase-column">
            <h4>Escopo coberto</h4>
            <ul className="page-list">
              {activeCase.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="case-showcase-footer">
          <p>{activeCase.signatureNote}</p>
          <span className="case-showcase-arrow">
            <FiArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
