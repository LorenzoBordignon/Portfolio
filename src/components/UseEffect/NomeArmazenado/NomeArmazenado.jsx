import { useEffect, useState } from "react";
import "./NomeArmazenado.css";

export function NomeArmazenado() {
  const [nome, setNome] = useState(localStorage.getItem("nome") || "");
  useEffect(() => {
    localStorage.setItem("nome", nome);
  }, [nome]);
  return (
    <div className="nome-armazenado">
      <h3>Armazenar Nome</h3>
      <div className="nome-armazenado__insert">
        <label htmlFor="nome-armazenado">Nome</label>
        <input
          name="nome-armazenado"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="button">
        Guardar Nome
      </button>
      <p>Olá {nome}</p>
    </div>
  );
}
