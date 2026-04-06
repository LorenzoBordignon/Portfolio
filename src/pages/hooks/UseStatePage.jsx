import { CampoNome } from "../../features/use-state/components/CampoNome/CampoNome";
import { CarrinhoDeCompras } from "../../features/use-state/components/CarrinhoDeCompras/CarrinhoDeCompras";
import { ContadorNumerico } from "../../features/use-state/components/ContadorNumerico/ContadorNumerico";
import { ListaDeTarefas } from "../../features/use-state/components/ListaDeTarefas/ListaDeTarefas";
import { Page } from "../../shared/components/Page/Page";
import { PageSectionGroup } from "../../shared/components/Page/PageSectionGroup";

export function UseStatePage() {
  return (
    <Page
      eyebrow="React Hooks"
      title="UseState"
      description="Exemplos de estado local com contador, formulário, lista e carrinho."
    >
      <PageSectionGroup title="Exemplos com estado local">
        <ContadorNumerico />
        <CampoNome />
        <ListaDeTarefas />
        <CarrinhoDeCompras />
      </PageSectionGroup>
    </Page>
  );
}
