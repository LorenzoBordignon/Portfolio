import { Link } from "react-router-dom";
import { appRoutes, navigationGroups } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function HomePage() {
  const routeLinks = navigationGroups.flatMap((group) => group.links);

  return (
    <Page
      eyebrow="Repositório Histórico"
      title="Versão anterior arquivada do Portfolio Lorenzo"
      description="Este projeto agora fica preservado como referência histórica, enquanto a nova estrutura seguirá em outro repositório."
    >
      <PageSectionGroup title="Qual o papel deste projeto agora?">
        <div className="page-copy-block">
          <p>
            Este repositório deixou de ser a base principal do portfólio e
            passa a funcionar como um arquivo da versão anterior do projeto.
          </p>
          <p>
            Ele continua útil como histórico de decisões, layout e estrutura,
            enquanto os próximos passos seguirão em uma base nova.
          </p>
        </div>
      </PageSectionGroup>

      <PageSectionGroup title="Navegar pelo histórico">
        <div className="page-route-grid">
          {routeLinks
            .filter((link) => link.to !== appRoutes.home)
            .map((link) => (
              <Link className="page-route-card" key={link.to} to={link.to}>
                <strong>{link.label}</strong>
                <p>{link.description}</p>
              </Link>
            ))}
        </div>
      </PageSectionGroup>

      <PageSectionGroup title="O que este histórico preserva">
        <div className="page-route-grid">
          <div className="page-route-card">
            <strong>Apresentação</strong>
            <p>
              A forma como a apresentação pessoal estava organizada nesta fase
              do projeto.
            </p>
          </div>
          <div className="page-route-card">
            <strong>Projetos</strong>
            <p>
              A estrutura usada para exibir cases, contexto e decisões de cada
              trabalho.
            </p>
          </div>
          <div className="page-route-card">
            <strong>Contato</strong>
            <p>
              O formato anterior pensado para canais profissionais e formas de
              contato.
            </p>
          </div>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
