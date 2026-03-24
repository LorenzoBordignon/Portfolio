import { useEffect, useState } from "react";
import "./DetectorDigitacao.css";

export function DetectorDigitacao() {
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(`Digitado: ${input}`);
  }, [input]);
  return (
    <div className="detector-digitacao">
      <h3>Detector de Digitacao</h3>
      <div className="detector-digitacao__insert">
        <label htmlFor="">Digite Algo</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <p>Olá {input}</p>
      <p>Observe o console!</p>
    </div>
  );
}
