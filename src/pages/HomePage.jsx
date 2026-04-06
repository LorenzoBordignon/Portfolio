import { Link } from "react-router-dom";
import { appRoutes, navigationGroups } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function HomePage() {
  const routeLinks = navigationGroups.flatMap((group) => group.links);

  return (
    <Page
      eyebrow="Portfólio"
      title="Seja bem-vindo(a) ao meu portfólio"
      description="Sinta-se à vontade para explorar os módulos do projeto"
    >
      <PageSectionGroup title="Qual o contexto do portfólio?">
        <div className="page-copy-block">
          <p>
            Este portfólio foi criado como um espaço de estudo de React,
            reunindo exemplos práticos para entender melhor como a biblioteca
            funciona no dia a dia.
          </p>
          <p>
            Aqui eu exploro funcionalidades usando pequenas implementações para
            praticar cada conceito.
          </p>
        </div>
      </PageSectionGroup>
      <PageSectionGroup title="Explorar Módulos">
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
    </Page>
  );
}
