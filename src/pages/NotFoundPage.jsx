import { Link } from "react-router-dom";
import { appRoutes } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function NotFoundPage() {
  return (
    <Page
      eyebrow="Rota não encontrada"
      title="Essa página não existe neste histórico"
      description="O projeto agora está arquivado como referência, então a navegação foi mantida de forma mais enxuta."
    >
      <PageSectionGroup title="Voltar para uma rota válida">
        <div className="page-copy-block">
          <p>
            O caminho acessado não corresponde a nenhuma página cadastrada neste
            momento.
          </p>
          <Link className="page-inline-link" to={appRoutes.home}>
            Ir para a visão geral
          </Link>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
