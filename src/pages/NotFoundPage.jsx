import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { appRoutes } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function NotFoundPage() {
  return (
    <Page
      eyebrow="Pagina nao encontrada"
      title="A pagina que voce tentou abrir nao faz parte deste portifolio."
      description="Use a navegacao principal para voltar para inicio, sobre ou contato."
      actions={
        <Link className="btn btn-primary" to={appRoutes.home}>
          Voltar para o inicio
          <FiArrowLeft />
        </Link>
      }
      heroStats={[
        { value: "404", label: "pagina fora do mapa" },
        { value: "3", label: "paginas principais ativas" },
      ]}
    >
      <PageSectionGroup
        eyebrow="Redirecionar"
        title="Retome o percurso principal"
        description="As paginas visiveis deste portifolio estao prontas para receber suas informacoes pessoais."
      >
        <div className="page-copy-block">
          <p>
            O caminho acessado nao corresponde a nenhuma pagina cadastrada neste
            momento.
          </p>
          <Link className="page-inline-link" to={appRoutes.home}>
            Ir para o inicio
          </Link>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
