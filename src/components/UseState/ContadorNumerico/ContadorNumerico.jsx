import { useState } from "react"; //UseState
import "./ContadorNumerico.css";

export function ContadorNumerico() {
  const [contador, setContador] = useState(0);

  function aumentarContador() {
    setContador((antigaContagem) => antigaContagem + 1);
  }

  function reduzirContador() {
    if (contador > -5) {
      setContador((antigaContagem) => antigaContagem - 1);
    }
  }

  function zerarContador() {
    setContador(0);
  }
  return (
    <div className="contador-numerico">
      <h3>Contador Numérico</h3>
      <p className="contador-numerico__contagem">Contagem: {contador}</p>
      <div className="contador-numerico__btn-group">
        <button className="btn btn-primary" onClick={aumentarContador}>
          Aumentar
        </button>
        <button
          className="btn btn-primary"
          onClick={reduzirContador}
          disabled={contador <= -5}
        >
          Reduzir
        </button>
        <button className="btn btn-primary" onClick={zerarContador}>
          Zerar
        </button>
      </div>
    </div>
  );
}
