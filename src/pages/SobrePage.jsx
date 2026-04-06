import { Biografia } from "../features/sobre/components/Biografia/Biografia";
import { Formacoes } from "../features/sobre/components/Formacoes/Formacoes";
import { Page } from "../shared/components/Page/Page";
import { PageSectionGroup } from "../shared/components/Page/PageSectionGroup";

export function SobrePage() {
  return (
    <Page
      eyebrow="Sobre"
      title="Contexto pessoal e trajetória"
      description="Uma rota dedicada para apresentar biografia e formações de forma mais organizada."
    >
      <PageSectionGroup title="Sobre Mim">
        <Biografia />
        <Formacoes />
      </PageSectionGroup>
    </Page>
  );
}
