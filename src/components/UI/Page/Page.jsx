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

export function Page() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="page-content-group" id="inicio">
          <h2 className="page-title" id="sobre-mim">
            Sobre Mim
          </h2>
          <section className="page-section">
            <Biografia />
          </section>
          <section className="page-section">
            <Formacoes />
          </section>
        </div>
        <div className="page-content-group" id="react-hooks">
          <h2 className="page-title" id="use-state">
            UseState
          </h2>
          <section className="page-section">
            <ContadorNumerico />
          </section>
          <section className="page-section">
            <CampoNome />
          </section>
          <section className="page-section">
            <ListaDeTarefas />
          </section>
          <section className="page-section">
            <CarrinhoDeCompras />
          </section>
        </div>
        <div className="page-content-group">
          <h2 className="page-title" id="use-effect">
            UseEffect
          </h2>
          <section className="page-section">
            <DetectorDigitacao />
          </section>
          <section className="page-section">
            <RelogioDinamico />
          </section>
          <section className="page-section">
            <NomeArmazenado />
          </section>
        </div>
        <div className="page-end-spacer" aria-hidden="true" />
      </div>
    </div>
  );
}
