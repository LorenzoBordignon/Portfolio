import { useState } from "react"; //UseState
import "./CampoNome.css";

export function CampoNome() {
  const [nome, setNome] = useState("");
  return (
    <div className="campo-nome">
      <h3>Saudação Dinâmica</h3>
      <div className="campo-nome__insert">
        <label htmlFor="name-input">Digite seu nome</label>
        <input
          name="name-input"
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <p className="campo-nome__nome">
        {nome ? `Olá, ${nome}` : "Digite seu nome..."}
      </p>
    </div>
  );
}
