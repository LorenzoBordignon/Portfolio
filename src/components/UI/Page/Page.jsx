import "./Page.css";
import { CampoNome } from "../../UseState/CampoNome/CampoNome";
import { CarrinhoDeCompras } from "../../UseState/CarrinhoDeCompras/CarrinhoDeCompras";
import { ContadorNumerico } from "../../UseState/ContadorNumerico/ContadorNumerico";
import { ListaDeTarefas } from "../../UseState/ListaDeTarefas/ListaDeTarefas";
import { DetectorDigitacao } from "../../UseEffect/DetectorDigitação/DetectorDigitação";
import { RelogioDinamico } from "../../UseEffect/RelogioDinamico/RelogioDInamico";
import { NomeArmazenado } from "../../UseEffect/NomeArmazenado/NomeArmazenado";

export function Page() {
  return (
    <div className="page">
      <div className="page-content">
        <h2 className="page-title" id="use-state">
          Início
        </h2>
        <section className="page-section"></section>
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
        <div className="page-end-spacer" aria-hidden="true" />
      </div>
    </div>
  );
}
