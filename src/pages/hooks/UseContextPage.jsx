import { useState } from "react";
import { ExibicaoDeDados } from "../../features/use-context/components/ExibicaoDeDados/ExibicaoDeDados";
import { FormularioDeDados } from "../../features/use-context/components/FormularioDeDados/FormularioDeDados";
import { NomeHerdado } from "../../features/use-context/components/NomeHerdado/NomeHerdado";
import { FormularioDeDadosContext } from "../../context/FormularioDeDadosContext";
import { NomeHerdadoContext } from "../../context/NomeHerdadoContext";
import { Page } from "../../shared/components/Page/Page";
import { PageSectionGroup } from "../../shared/components/Page/PageSectionGroup";

export function UseContextPage() {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: "",
    sobrenome: "",
    idade: "",
  });

  return (
    <Page
      eyebrow="React Hooks"
      title="UseContext"
      description="Exemplos de compartilhamento de dados entre componentes usando contextos dedicados."
    >
      <NomeHerdadoContext.Provider value={{ nome: "Lorenzo", stack: "React" }}>
        <PageSectionGroup title="Dados herdados">
          <NomeHerdado />
        </PageSectionGroup>
      </NomeHerdadoContext.Provider>

      <FormularioDeDadosContext.Provider
        value={{ dadosFormulario, setDadosFormulario }}
      >
        <PageSectionGroup title="Formulário compartilhado">
          <FormularioDeDados />
          <ExibicaoDeDados />
        </PageSectionGroup>
      </FormularioDeDadosContext.Provider>
    </Page>
  );
}
