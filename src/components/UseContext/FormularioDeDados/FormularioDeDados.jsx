import { useContext, useState } from "react";
import "./FormularioDeDados.css";
import { FormularioDeDadosContext } from "../../../context/FormularioDeDadosContext";

export function FormularioDeDados() {
  const { setDadosFormulario } = useContext(FormularioDeDadosContext);
  const [dadosDigitados, setDadosDigitados] = useState({
    nome: "",
    sobrenome: "",
    idade: "",
  });
  function enviarForm(dados) {
    setDadosFormulario({
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      idade: dados.idade,
    });
  }
  return (
    <div className="formulario-dados">
      <h3>Fomulário de Dados</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="insert-group">
          <label htmlFor="input-nome">Nome</label>
          <input
            type="text"
            name="input-nome"
            value={dadosDigitados.nome}
            onChange={(e) =>
              setDadosDigitados({
                ...dadosDigitados,
                nome: e.target.value,
              })
            }
          />
        </div>
        <div className="insert-group">
          <label htmlFor="input-sobrenome">Sobrenome</label>
          <input
            type="text"
            name="input-sobrenome"
            value={dadosDigitados.sobrenome}
            onChange={(e) =>
              setDadosDigitados({
                ...dadosDigitados,
                sobrenome: e.target.value,
              })
            }
          />
        </div>
        <div className="insert-group">
          <label htmlFor="input-idade">Idade</label>
          <input
            type="number"
            name="input-idade"
            value={dadosDigitados.idade}
            onChange={(e) =>
              setDadosDigitados({
                ...dadosDigitados,
                idade: e.target.value,
              })
            }
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => enviarForm(dadosDigitados)}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
