import { useState } from "react";
import "./Login.css";
import { supabase } from "../../../lib/supabaseClient";

export function LoginForm({ onAbrirCadastro, onAuthLoadingChange }) {
  const [dadosLogin, setDadosLogin] = useState({
    email: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function enviarLogin(dados) {
    if (isSubmitting) return;

    if (dados.email === "" || dados.senha === "") {
      setErro("Preencha email e senha.");
      return;
    }

    if (!emailValido(dados.email)) {
      setErro("Digite um email válido.");
      return;
    }

    setErro("");
    onAuthLoadingChange?.(true);
    setIsSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: dados.email,
      password: dados.senha,
    });

    if (error) {
      setErro(error.message);
      setIsSubmitting(false);
      onAuthLoadingChange?.(false);
      return;
    }

    setDadosLogin({ email: "", senha: "" });
    setIsSubmitting(false);
  }

  return (
    <div className="login-content" id="form-login">
      <h1>Entrar</h1>
      <form
        className="login-content__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-content__form-field">
          <label htmlFor="login-email">E-mail</label>
          <input
            placeholder="exemplo@email.com"
            type="text"
            id="login-email"
            name="login-email"
            value={dadosLogin.email}
            onChange={(e) =>
              setDadosLogin({ ...dadosLogin, email: e.target.value })
            }
          />
        </div>
        <div className="login-content__form-field">
          <label htmlFor="login-senha">Senha</label>
          <input
            type="password"
            id="login-senha"
            name="login-senha"
            value={dadosLogin.senha}
            onChange={(e) =>
              setDadosLogin({ ...dadosLogin, senha: e.target.value })
            }
          />
        </div>
        <button
          className="btn btn-primary"
          type="button"
          disabled={isSubmitting}
          onClick={() => enviarLogin(dadosLogin)}
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>
        {erro && <p className="login-form-error">* {erro}</p>}
      </form>
      <div className="login-alternative-option">
        <a href="#">Esqueceu sua senha?</a> ou
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onAbrirCadastro();
          }}
        >
          Não tem uma conta? Cadastre-se
        </a>
      </div>
    </div>
  );
}
