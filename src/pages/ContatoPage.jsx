import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiUser } from "react-icons/fi";
import { appRoutes } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function ContatoPage() {
  const contactChannels = [
    {
      title: "E-mail principal",
      description: "lorenzobordignon73@gmail.com",
      actionLabel: "Enviar e-mail",
      actionHref: "mailto:lorenzobordignon73@gmail.com",
      icon: <FiMail />,
      openInNewTab: false,
    },
    {
      title: "E-mail profissional",
      description: "lorenzo@goldenit.com.br",
      actionLabel: "Abrir e-mail",
      actionHref: "mailto:lorenzo@goldenit.com.br",
      icon: <FiMail />,
      openInNewTab: false,
    },
    {
      title: "LinkedIn",
      description: "www.linkedin.com/in/lorenzo-bordignon",
      actionLabel: "Abrir LinkedIn",
      actionHref: "https://www.linkedin.com/in/lorenzo-bordignon",
      icon: <FiUser />,
      openInNewTab: true,
    },
  ];
  const contactNotes = [
    {
      title: "Canal preferido",
      description: "Meu canal preferido para primeiro contato é o LinkedIn.",
    },
    {
      title: "Contato público",
      description:
        "Não compartilho telefone publicamente. Prefiro concentrar o contato por e-mail e LinkedIn.",
    },
    {
      title: "Intenção deste espaço",
      description:
        "Esta página existe para conexões, conversas e feedbacks, mais do que para novas oportunidades.",
    },
  ];
  const presenceCards = [
    {
      title: "GitHub",
      description:
        "Para ver mais do que venho construindo, este é o melhor lugar para acompanhar meus projetos.",
      actionLabel: "Ver GitHub",
      actionHref: "https://github.com/LorenzoBordignon",
      openInNewTab: true,
    },
    {
      title: "Localização",
      description: "Curitiba, Paraná, Brasil.",
    },
    {
      title: "Momento atual",
      description:
        "Hoje atuo na Golden IT e sigo desenvolvendo minha caminhada entre tecnologia, gestão e crescimento pessoal.",
    },
  ];

  return (
    <Page
      eyebrow="Contato"
      title="Conecte-se comigo."
      description="Se quiser falar comigo, os melhores caminhos são o e-mail e o LinkedIn. Este espaço foi pensado para conexões, conversas e feedbacks."
      actions={
        <>
          <Link className="btn btn-primary" to={appRoutes.home}>
            Início
          </Link>
          <Link className="btn btn-secondary" to={appRoutes.sobre}>
            Sobre Mim
          </Link>
        </>
      }
      heroStats={[
        { value: "2", label: "e-mails para contato" },
        { value: "LinkedIn", label: "canal preferido para primeiro contato" },
        { value: "Curitiba", label: "Paraná, Brasil" },
      ]}
      heroAside={
        <div className="page-highlight-block">
          <span className="page-card-kicker">Contato direto</span>
          <h3>Entre em contato comigo.</h3>
          <p>
            Hoje eu não busco novas oportunidades, mas estou sempre aberto a
            boas conexões, conversas sinceras e feedbacks.
          </p>
          <div className="page-chip-list">
            <span className="page-chip">E-mail</span>
            <span className="page-chip">LinkedIn</span>
            <span className="page-chip">GitHub</span>
          </div>
        </div>
      }
    >
      <PageSectionGroup
        eyebrow="Canais"
        title="Estas são as formas de falar comigo"
        description="Se quiser me chamar, comece por um dos canais abaixo."
      >
        <div className="page-grid">
          {contactChannels.map((channel) => (
            <article
              className="page-card page-card-highlight"
              key={channel.title}
            >
              <span className="page-card-kicker">
                {channel.icon}
                Canal
              </span>
              <h3 className="page-card-title">{channel.title}</h3>
              <p>{channel.description}</p>
              <a
                className="page-inline-link"
                href={channel.actionHref}
                rel="noreferrer"
                target={channel.openInNewTab ? "_blank" : undefined}
              >
                {channel.actionLabel}
              </a>
            </article>
          ))}
        </div>
      </PageSectionGroup>

      <PageSectionGroup
        eyebrow="Observações"
        title="Como prefiro ser encontrado"
        description="Esses pontos ajudam a entender melhor a minha forma de contato."
      >
        <div className="page-grid">
          {contactNotes.map((note) => (
            <article className="page-card" key={note.title}>
              <h3 className="page-card-title">{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </PageSectionGroup>

      <PageSectionGroup
        eyebrow="Presença"
        title="Outras referências importantes"
        description="Aqui estão alguns pontos que ajudam a completar minha apresentação."
      >
        <div className="page-grid">
          {presenceCards.map((card) => (
            <article className="page-card" key={card.title}>
              <span className="page-card-kicker">
                {card.title === "Localização" ? <FiMapPin /> : <FiUser />}
                Referência
              </span>
              <h3 className="page-card-title">{card.title}</h3>
              <p>{card.description}</p>
              {card.actionHref ? (
                <a
                  className="page-inline-link"
                  href={card.actionHref}
                  rel="noreferrer"
                  target={card.openInNewTab ? "_blank" : undefined}
                >
                  {card.actionLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </PageSectionGroup>
    </Page>
  );
}
