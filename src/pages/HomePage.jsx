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
    "Administracao",
    "Familia",
    "Fe",
    "Crescimento",
  ];
  const highlightCards = [
    {
      icon: <FiUser />,
      title: "Quem sou",
      description:
        "Tenho 18 anos, sou Desenvolvedor Web e estudante de Administracao, sempre em busca de crescimento com consistencia.",
      bullets: [
        "Atuo hoje na Golden IT",
        "Tecnologia faz parte da minha vida como profissao e hobby",
        "Quero ser lembrado por quem eu sou, nao so pelo que eu faco",
      ],
    },
    {
      icon: <FiHeart />,
      title: "Valores",
      description:
        "Minha caminhada e guiada pela familia, pela fe e pela forma como escolho tratar as pessoas.",
      bullets: [
        "Familia e fe como base",
        "Compaixao e empatia no trato com os outros",
        "Lealdade, leveza e respeito em cada etapa",
      ],
    },
    {
      icon: <FiCompass />,
      title: "Quem desejo me tornar",
      description:
        "Hoje estou construindo uma base solida para crescer como pessoa, profissional e futuro sucessor do legado do meu pai.",
      bullets: [
        "Desenvolvimento profissional",
        "Desenvolvimento pessoal",
        "Uma historia de respeito, foco e proposito",
      ],
    },
  ];
  const homeSections = [
    {
      title: "Presente",
      description:
        "Hoje trabalho com desenvolvimento web na Golden IT, atuando em solucoes para industrias de alimentos entre novos projetos e manutencao de legado.",
    },
    {
      title: "Conquistas",
      description:
        "Carrego com orgulho a minha efetivacao profissional ainda jovem e a entrada na UFPR no curso de Administracao.",
    },
    {
      title: "Futuro",
      description:
        "Meu foco e fortalecer a base que estou construindo agora para viver um futuro com mais maturidade, visao e responsabilidade.",
    },
  ];

  return (
    <Page
      eyebrow="Inicio"
      title="Seja bem-vindo, me chamo Lorenzo Bordignon."
      description="Sou Desenvolvedor Web e estudante de Administracao na UFPR. Trabalho na Golden IT desenvolvendo solucoes para industrias de alimentos e sigo construindo, com foco e consistencia, o futuro que quero viver."
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
        { value: "UFPR", label: "estudante de Administracao" },
        { value: "Golden IT", label: "atuacao profissional atual" },
      ]}
      heroAside={
        <div className="page-highlight-block">
          <span className="page-card-kicker">Tente outra vez</span>
          <h3>Guiado pelos valores da familia e pela fe.</h3>
          <p>
            Permaneca firme na sua caminhada, seja aberto a novas experiencias e
            seja desapegado de coisas materiais que nos distanciam da familia e
            da fe.
          </p>
          <div className="page-chip-list">
            <span className="page-chip">Familia</span>
            <span className="page-chip">Fe</span>
            <span className="page-chip">Crescimento</span>
          </div>
        </div>
      }
    >
      <section className="page-marquee" aria-label="Destaques do portifolio">
        <div className="page-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="page-marquee-item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <PageSectionGroup
        eyebrow="Apresentacao"
        title="Quem sou, o que valorizo e quem desejo me tornar"
        description="Esta primeira leitura resume a minha identidade, a base que me sustenta e a direcao que sigo construindo."
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
        description="Meu portifolio existe para apresentar o meu presente, a minha caminhada e a pessoa que venho me tornando."
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
        eyebrow="Navegacao"
        title="Continue a leitura"
        description="Se quiser me conhecer melhor, siga para as paginas abaixo."
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
          <span className="page-card-kicker">Proximo passo</span>
          <h2>Na pagina sobre eu conto melhor a historia que me trouxe ate aqui.</h2>
          <p>
            Ali eu compartilho minha trajetoria, minhas referencias e o que
            venho construindo dentro e fora da programacao.
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
