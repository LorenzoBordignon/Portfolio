import { useContext } from "react";
import "./NomeHerdado.css";
import { NomeHerdadoContext } from "../../../../context/NomeHerdadoContext";

export function NomeHerdado() {
  const nomeHerdadoDados = useContext(NomeHerdadoContext);
  return (
    <div className="nome-herdado">
      <h3>Dados Herdados</h3>
      <p>Nome: {nomeHerdadoDados.nome}</p>
      <p>Stack: {nomeHerdadoDados.stack}</p>
    </div>
  );
}
