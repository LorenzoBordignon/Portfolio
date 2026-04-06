import { DetectorDigitacao } from "../../features/use-effect/components/DetectorDigitacao/DetectorDigitacao";
import { NomeArmazenado } from "../../features/use-effect/components/NomeArmazenado/NomeArmazenado";
import { RelogioDinamico } from "../../features/use-effect/components/RelogioDinamico/RelogioDinamico";
import { Page } from "../../shared/components/Page/Page";
import { PageSectionGroup } from "../../shared/components/Page/PageSectionGroup";

export function UseEffectPage() {
  return (
    <Page
      eyebrow="React Hooks"
      title="UseEffect"
      description="Exemplos com efeitos colaterais, atualização por intervalo e persistência."
    >
      <PageSectionGroup title="Exemplos com efeitos">
        <DetectorDigitacao />
        <RelogioDinamico />
        <NomeArmazenado />
      </PageSectionGroup>
    </Page>
  );
}
