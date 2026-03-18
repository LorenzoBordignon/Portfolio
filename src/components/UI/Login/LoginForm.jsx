import { useState } from "react";
import "./Login.css";
import { supabase } from "../../../lib/supabaseClient";
import { HiCodeBracket } from "react-icons/hi2";

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
      <div className="login-main">
        <HiCodeBracket className="login-main-icon" />
        <h1>Entrar</h1>

      <form
        className="login-content__form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-content__form-field">
          <input
            placeholder="E-mail"
            type="text"
            id="login-email"
            name="login-email"
            autoComplete="off"
            value={dadosLogin.email}
            onChange={(e) =>
              setDadosLogin({ ...dadosLogin, email: e.target.value })
            }
          />
          </div>
          <div className="login-content__form-field">
            <input
            placeholder="Senha"
            type="password"
            id="login-senha"
            name="login-senha"
            autoComplete="off"
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
      </div>
      <div className="login-alternative-option">
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
