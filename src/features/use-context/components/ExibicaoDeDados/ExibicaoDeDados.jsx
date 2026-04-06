import { useContext } from "react";
import "./ExibicaoDeDados.css";
import { FormularioDeDadosContext } from "../../../../context/FormularioDeDadosContext";

export function ExibicaoDeDados() {
  const { dadosFormulario } = useContext(FormularioDeDadosContext);
  return (
    <div className="exibicao-dados">
      <h3>Exibição dos Dados</h3>
      <div className="exibicao-dados__content">
        <p>Nome: {dadosFormulario.nome}</p>
        <p>Sobrenome: {dadosFormulario.sobrenome}</p>
        <p>Idade: {dadosFormulario.idade}</p>
      </div>
    </div>
  );
}
