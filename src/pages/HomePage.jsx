import { Link } from "react-router-dom";
import { appRoutes, navigationGroups } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function HomePage() {
  const routeLinks = navigationGroups.flatMap((group) => group.links);

  return (
    <Page
      eyebrow="Portfólio React"
      title="Uma trilha por temas, em vez de uma página única gigante"
      description="Agora o projeto está organizado por áreas claras: visão geral, sobre e páginas separadas para cada hook estudado."
    >
      <PageSectionGroup title="Explorar rotas">
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

      <PageSectionGroup title="Como a estrutura ficou">
        <div className="page-copy-block">
          <p>
            O layout global fica em <code>layouts</code>, as rotas em{" "}
            <code>app</code>, as páginas em <code>pages</code> e os blocos de
            conteúdo em <code>features</code>.
          </p>
          <p>
            Isso facilita evoluir o portfólio sem concentrar tudo em um único
            componente.
          </p>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
