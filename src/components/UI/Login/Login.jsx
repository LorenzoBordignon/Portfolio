import { useState } from "react";
import "./Login.css";
import { LoginForm } from "./LoginForm";
import { CadastroForm } from "./CadastroForm";

export function Login({ onAuthLoadingChange }) {
  const [mostraLogin, setMostraLogin] = useState(true);

  return (
    <section className="login-background">
      {mostraLogin ? (
        <LoginForm
          onAbrirCadastro={() => setMostraLogin(false)}
          onAuthLoadingChange={onAuthLoadingChange}
        />
      ) : (
        <CadastroForm
          onAbrirLogin={() => setMostraLogin(true)}
          onAuthLoadingChange={onAuthLoadingChange}
        />
      )}
    </section>
  );
}
