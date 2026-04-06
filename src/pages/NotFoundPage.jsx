import { Link } from "react-router-dom";
import { appRoutes } from "../app/routes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function NotFoundPage() {
  return (
    <Page
      eyebrow="Rota não encontrada"
      title="Essa página não existe no portfólio"
      description="A navegação principal continua disponível, mas você também pode voltar direto para a visão geral."
    >
      <PageSectionGroup title="Voltar para uma rota válida">
        <div className="page-copy-block">
          <p>
            O caminho acessado não corresponde a nenhuma página cadastrada no
            roteador atual.
          </p>
          <Link className="page-inline-link" to={appRoutes.home}>
            Ir para a visão geral
          </Link>
        </div>
      </PageSectionGroup>
    </Page>
  );
}
