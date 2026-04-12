import { Link } from "react-router-dom";
import { FiArrowRight, FiCompass, FiHeart, FiUser } from "react-icons/fi";
import { appRoutes, navigationGroups } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function HomePage() {
  const routeLinks = navigationGroups.flatMap((group) =>
    group.links.filter((link) => link.to !== appRoutes.home),
  );
  const marqueeItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Next.js",
    "Administração",
    "Família",
    "Fé",
    "Crescimento",
  ];
  const highlightCards = [
    {
      icon: <FiUser />,
      title: "Quem sou",
      description:
        "Tenho 18 anos, sou Desenvolvedor Web e estudante de Administração, sempre em busca de crescimento com consistência.",
      bullets: [
        "Atuo hoje na Golden IT",
        "Tecnologia faz parte da minha vida como profissão e hobby",
        "Quero ser lembrado por quem eu sou, não só pelo que eu faço",
      ],
    },
    {
      icon: <FiHeart />,
      title: "Valores",
      description:
        "Minha caminhada é guiada pela família, pela fé e pela forma como escolho tratar as pessoas.",
      bullets: [
        "Família e fé como base",
        "Compaixão e empatia no trato com os outros",
        "Lealdade, leveza e respeito em cada etapa",
      ],
    },
    {
      icon: <FiCompass />,
      title: "Quem desejo me tornar",
      description:
        "Hoje estou construindo uma base sólida para crescer como pessoa, profissional e futuro sucessor do legado do meu pai.",
      bullets: [
        "Desenvolvimento profissional",
        "Desenvolvimento pessoal",
        "Uma história de respeito, foco e propósito",
      ],
    },
  ];
  const homeSections = [
    {
      title: "Presente",
      description:
        "Hoje trabalho com desenvolvimento web na Golden IT, atuando em soluções para indústrias de alimentos entre novos projetos e manutenção de legado.",
    },
    {
      title: "Conquistas",
      description:
        "Carrego com orgulho a minha efetivação profissional ainda jovem e a entrada na UFPR no curso de Administração.",
    },
    {
      title: "Futuro",
      description:
        "Meu foco é fortalecer a base que estou construindo agora para viver um futuro com mais maturidade, visão e responsabilidade.",
    },
  ];

  return (
    <Page
      eyebrow="Início"
      title="Seja bem-vindo(a) ao meu portfólio."
      description="Sou Desenvolvedor Web e estudante de Administração na UFPR. Trabalho na Golden IT desenvolvendo soluções para indústrias de alimentos e sigo construindo, com foco e consistência, o futuro que quero viver."
      actions={
        <>
          <Link className="btn btn-primary" to={appRoutes.sobre}>
            Sobre Mim
            <FiArrowRight />
          </Link>
          <Link className="btn btn-secondary" to={appRoutes.contato}>
            Contato
          </Link>
        </>
      }
      heroStats={[
        { value: "18", label: "anos de idade" },
        { value: "UFPR", label: "estudante de Administração" },
        { value: "Golden IT", label: "atuação profissional atual" },
      ]}
      heroAside={
        <div className="page-highlight-block">
          <span className="page-card-kicker">Este portfólio</span>
          <h3>Mais do que projetos, este espaço apresenta a pessoa por trás do código.</h3>
          <p>
            Aqui eu reúno minha trajetória, os valores que me sustentam e a
            direção que estou construindo entre tecnologia, administração e
            crescimento pessoal.
          </p>
          <div className="page-chip-list">
            <span className="page-chip">Trajetória</span>
            <span className="page-chip">Valores</span>
            <span className="page-chip">Direção</span>
          </div>
        </div>
      }
    >
      <section className="page-marquee" aria-label="Destaques do portfólio">
        <div className="page-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="page-marquee-item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <PageSectionGroup
        eyebrow="Apresentação"
        title="Quem sou, o que valorizo e quem desejo me tornar"
        description="Esta primeira leitura resume a minha identidade, a base que me sustenta e a direção que sigo construindo."
      >
        <div className="page-grid page-grid-wide">
          {highlightCards.map((card) => (
            <article className="page-card page-card-highlight" key={card.title}>
              <span className="page-card-kicker">
                {card.icon}
                Bloco
              </span>
              <h3 className="page-card-title">{card.title}</h3>
              <p>{card.description}</p>
              <ul className="page-card-list">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageSectionGroup>

      <PageSectionGroup
        eyebrow="Momento atual"
        title="O que define a minha fase de vida hoje"
        description="Meu portfólio existe para apresentar o meu presente, a minha caminhada e a pessoa que venho me tornando."
      >
        <div className="page-grid">
          {homeSections.map((card) => (
            <article className="page-card" key={card.title}>
              <h3 className="page-card-title">{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </PageSectionGroup>

      <PageSectionGroup
        eyebrow="Navegação"
        title="Continue a leitura"
        description="Se quiser me conhecer melhor, siga para as páginas abaixo."
      >
        <div className="page-route-grid">
          {routeLinks.map((link) => (
            <Link className="page-route-card" key={link.to} to={link.to}>
              <strong>{link.label}</strong>
              <p>{link.description}</p>
            </Link>
          ))}
        </div>
      </PageSectionGroup>

      <section className="page-cta-panel">
        <div className="page-cta-copy">
          <span className="page-card-kicker">Próximo passo</span>
          <h2>
            Na página sobre eu conto melhor a história que me trouxe até aqui.
          </h2>
          <p>
            Ali eu compartilho minha trajetória, minhas referências e o que
            venho construindo dentro e fora da programação.
          </p>
        </div>

        <Link className="btn btn-primary" to={appRoutes.sobre}>
          Quem sou eu?
          <FiArrowRight />
        </Link>
      </section>
    </Page>
  );
}
