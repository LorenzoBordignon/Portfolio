import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { appRoutes } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function NotFoundPage() {
  return (
    <Page
      eyebrow="Página não encontrada"
      title="A página que você tentou abrir não faz parte deste portfólio."
      description="Use a navegação principal para voltar para início, sobre ou contato."
      actions={
        <Link className="btn btn-primary" to={appRoutes.home}>
          Voltar para o início
          <FiArrowLeft />
        </Link>
      }
      heroStats={[
        { value: "404", label: "página fora do mapa" },
        { value: "3", label: "páginas principais ativas" },
      ]}
    >
      <PageSectionGroup
        eyebrow="Redirecionar"
        title="Retome o percurso principal"
        description="As páginas visíveis deste portfólio estão prontas para receber suas informações pessoais."
      >
        <div className="page-copy-block">
          <p>
            O caminho acessado não corresponde a nenhuma página cadastrada neste
            momento.
          </p>
          <Link className="page-inline-link" to={appRoutes.home}>
            Ir para o início
          </Link>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
