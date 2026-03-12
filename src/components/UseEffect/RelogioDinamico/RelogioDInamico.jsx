import { useEffect, useState } from "react";
import "./RelogioDinamico.css";

export function RelogioDinamico() {
  const [hora, setHora] = useState(new Date());
  function atualizarHora() {
    const horaAtual = new Date();
    setHora(horaAtual);
  }
  useEffect(() => {
    const intervalo = setInterval(atualizarHora, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);
  return (
    <div className="relogio-dinamico">
      <h3>Relógio Dinâmico</h3>
      <h4>Hora Atual: {hora.toLocaleTimeString("pt-br")}</h4>
    </div>
  );
}
