import { Link } from "react-router-dom";
import { FiArrowRight, FiCompass, FiHeart, FiUser } from "react-icons/fi";
import { appRoutes } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function SobrePage() {
  const storyCards = [
    {
      icon: <FiUser />,
      title: "Quem sou",
      description:
        "Sou de Curitiba, tenho 18 anos e sigo construindo minha caminhada entre tecnologia, administração e autodesenvolvimento.",
      bullets: [
        "Desenvolvedor Web e estudante de Administração",
        "Atuo hoje na Golden IT",
        "Programação para mim é profissão, hobby e parte do futuro que quero construir",
      ],
    },
    {
      icon: <FiCompass />,
      title: "Trajetória",
      description:
        "A tecnologia entrou cedo na minha vida, muito por influência do meu pai, e desde então passou a ocupar um lugar central no meu caminho.",
      bullets: [
        "Comecei na programação aos 13 anos",
        "Entrei na empresa como estagiário aos 15 e fui efetivado aos 17",
        "Aos 18 anos entrei na UFPR para cursar Administração",
      ],
    },
    {
      icon: <FiHeart />,
      title: "Valores",
      description:
        "Família e fé são a base da minha forma de viver, trabalhar e olhar para o futuro.",
      bullets: [
        "Compaixão e empatia como qualidades humanas centrais",
        "Foco e trabalho em equipe como pilares profissionais",
        "Lealdade, respeito e energia positiva no dia a dia",
      ],
    },
  ];
  const journeySteps = [
    "2020 - comecei na programação aos 13 anos e percebi que esse caminho faria parte da minha vida.",
    "Aos 15 anos - iniciei na empresa como estagiário e vivi a tecnologia para além dos estudos.",
    "Aos 17 anos - fui efetivado, um marco importante na minha confiança profissional.",
    "Aos 18 anos - entrei na UFPR para cursar Administração e ampliar minha visão de negócio e de pessoas.",
  ];
  const aboutGroups = [
    {
      title: "Interesses",
      items: [
        "Tecnologia",
        "Administração",
        "Autodesenvolvimento",
        "Jogos",
        "Esportes ao ar livre",
      ],
    },
    {
      title: "Referências",
      items: [
        "Meu pai",
        "Minha mãe",
        "Família",
        "Fé",
        "Comunidade Católica",
      ],
    },
    {
      title: "O que estou construindo",
      items: [
        "Conhecimento",
        "Base sólida",
        "Mais confiança",
        "Uma história de respeito",
      ],
    },
  ];
  const personalNotes = [
    {
      title: "Jeito de trabalhar",
      description:
        "Gosto de ambientes com paz, tranquilidade e energia positiva. Trabalho melhor com foco, responsabilidade, boas relações e espaço para crescer em equipe.",
    },
    {
      title: "O que me inspira",
      description:
        "Minhas maiores referências vêm de casa. Meu pai e minha mãe moldam muito da pessoa e do profissional que quero ser.",
    },
    {
      title: "Momento atual",
      description:
        "Hoje sigo desenvolvendo soluções web, estudando Administração e fortalecendo minha base técnica com tecnologias como React, JavaScript, TypeScript e Next.js.",
    },
    {
      title: "Mensagem final",
      description:
        "Para me conhecer melhor, veja meus projetos no GitHub ou entre em contato comigo pelo LinkedIn ou e-mail.",
    },
  ];

  return (
    <Page
      eyebrow="Sobre"
      title="Minha história é feita de trabalho, família, fé e vontade de crescer."
      description="Sou de Curitiba, tenho 18 anos e sigo construindo minha caminhada entre programação, administração e autodesenvolvimento. A tecnologia entrou cedo na minha vida, muito por influência do meu pai, e hoje faz parte do presente e do futuro que quero honrar."
      actions={
        <>
          <Link className="btn btn-primary" to={appRoutes.contato}>
            Contato
            <FiArrowRight />
          </Link>
          <Link className="btn btn-secondary" to={appRoutes.home}>
            Início
          </Link>
        </>
      }
      heroStats={[
        { value: "13 anos", label: "início na programação" },
        { value: "17 anos", label: "efetivação na Golden IT" },
        { value: "18 anos", label: "entrada na UFPR" },
      ]}
      heroAside={
        <div className="page-highlight-block">
          <span className="page-card-kicker">Minha caminhada</span>
          <h3>Meu presente e meu passado constroem quem quero me tornar.</h3>
          <p>
            Sigo guiado por família, fé, foco e pelo desejo de construir uma
            história de respeito, sem perder a naturalidade no caminho.
          </p>
          <div className="page-chip-list">
            <span className="page-chip">Focado</span>
            <span className="page-chip">Divertido</span>
            <span className="page-chip">Leal</span>
          </div>
        </div>
      }
    >
      <PageSectionGroup
        eyebrow="Apresentação"
        title="Os blocos que melhor contam quem eu sou"
        description="Aqui estão a minha base pessoal, a minha história e os valores que me acompanham."
      >
        <div className="page-grid page-grid-wide">
          {storyCards.map((card) => (
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
        eyebrow="Trajetória"
        title="Uma linha do tempo da minha caminhada"
        description="Prefiro contar essa história de forma cronológica, do começo da programação até o momento atual."
      >
        <div className="page-grid">
          {journeySteps.map((step, index) => (
            <article className="page-card" key={step}>
              <span className="page-card-kicker">
                <FiCompass />
                Etapa {index + 1}
              </span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </PageSectionGroup>

      <PageSectionGroup
        eyebrow="Tópicos"
        title="Interesses, referências e direção"
        description="Esses grupos ajudam a mostrar o que me interessa, quem me inspira e o que quero construir."
      >
        <div className="page-grid">
          {aboutGroups.map((group) => (
            <article className="page-card" key={group.title}>
              <h3 className="page-card-title">{group.title}</h3>
              <div className="page-chip-list">
                {group.items.map((item) => (
                  <span className="page-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </PageSectionGroup>

      <PageSectionGroup
        eyebrow="Notas"
        title="Pontos que complementam a minha apresentação"
        description="Aqui entram a forma como trabalho, o que me inspira e o momento que estou vivendo."
      >
        <div className="page-grid">
          {personalNotes.map((note) => (
            <article className="page-card" key={note.title}>
              <h3 className="page-card-title">{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </PageSectionGroup>

      <section className="page-cta-panel">
        <div className="page-cta-copy">
          <span className="page-card-kicker">Próximo passo</span>
          <h2>Se quiser falar comigo, a página de contato reúne os melhores caminhos.</h2>
          <p>
            Lá você encontra meus e-mails, meu LinkedIn, meu GitHub e a forma
            como prefiro ser encontrado.
          </p>
        </div>

        <Link className="btn btn-primary" to={appRoutes.contato}>
          Contato
          <FiArrowRight />
        </Link>
      </section>
    </Page>
  );
}
