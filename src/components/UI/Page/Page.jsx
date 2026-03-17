import "./Page.css";
import { CampoNome } from "../../UseState/CampoNome/CampoNome";
import { CarrinhoDeCompras } from "../../UseState/CarrinhoDeCompras/CarrinhoDeCompras";
import { ContadorNumerico } from "../../UseState/ContadorNumerico/ContadorNumerico";
import { ListaDeTarefas } from "../../UseState/ListaDeTarefas/ListaDeTarefas";
import { DetectorDigitacao } from "../../UseEffect/DetectorDigitação/DetectorDigitação";
import { RelogioDinamico } from "../../UseEffect/RelogioDinamico/RelogioDInamico";
import { NomeArmazenado } from "../../UseEffect/NomeArmazenado/NomeArmazenado";
import { Biografia } from "../../Outros/Biografia/Biografia";
import { Formacoes } from "../../Outros/Formacoes/Formacoes";
import { PageSectionGroup } from "./PageSectionGroup";
import { NomeHerdado } from "../../UseContext/NomeHerdado/NomeHerdado";
import { NomeHerdadoContext } from "../../../context/NomeHerdadoContext";

export function Page() {
  return (
    <div className="page">
      <div className="page-content">
        <PageSectionGroup
          sectionGroupId="sobre-mim"
          sectionGroupTitle="Sobre Mim"
        >
          <Biografia />
          <Formacoes />
        </PageSectionGroup>

        <PageSectionGroup
          sectionGroupId="use-state"
          sectionGroupTitle="UseState"
        >
          <ContadorNumerico />
          <CampoNome />
          <ListaDeTarefas />
          <CarrinhoDeCompras />
        </PageSectionGroup>

        <PageSectionGroup
          sectionGroupId="use-effect"
          sectionGroupTitle="UseEffect"
        >
          <DetectorDigitacao />
          <RelogioDinamico />
          <NomeArmazenado />
        </PageSectionGroup>

        <PageSectionGroup
          sectionGroupId="use-context"
          sectionGroupTitle="UseContext"
        >
          <NomeHerdadoContext.Provider
            value={{ nome: "Lorenzo", stack: "React" }}
          >
            <NomeHerdado />
          </NomeHerdadoContext.Provider>
        </PageSectionGroup>
        <div className="page-end-spacer" aria-hidden="true" />
      </div>
    </div>
  );
}
