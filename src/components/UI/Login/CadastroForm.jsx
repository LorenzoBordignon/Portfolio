import { useState } from "react";
import "./Login.css";
import { supabase } from "../../../lib/supabaseClient";
import { IoCodeSlashOutline } from "react-icons/io5";

export function CadastroForm({ onAbrirLogin, onAuthLoadingChange }) {
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function enviarCadastro(dados) {
    if (isSubmitting) return;

    if (dados.email === "" || dados.senha === "" || dados.nome === "") {
      setErro("Preencha todos os campos.");
      return;
    }

    if (!emailValido(dados.email)) {
      setErro("Digite um email válido.");
      return;
    }

    if (dadosCadastro.senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setErro("");
    onAuthLoadingChange?.(true);
    setIsSubmitting(true);

    const { data, error } = await supabase.auth.signUp({
      email: dados.email,
      password: dados.senha,
      options: {
        data: {
          display_name: dados.nome,
        },
      },
    });

    if (error) {
      setErro(error.message);
      setIsSubmitting(false);
      onAuthLoadingChange?.(false);
      return;
    }

    setErro(
      "Cadastro realizado com sucesso. Verifique seu email ou faça login.",
    );
    setDadosCadastro({
      nome: "",
      email: "",
      senha: "",
    });
    setIsSubmitting(false);
    onAuthLoadingChange?.(false);

    console.log(data);
  }
  return (
    <div className="login-content " id="form-register">
      <div className="login-main">
        <IoCodeSlashOutline className="login-main-icon" />
        <h1>Cadastro</h1>
      <form
        className="login-content__form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-content__form-field">
          <input
            placeholder="Nome"
            type="text"
            id="cadastro-nome"
            name="cadastro-nome"
            autoComplete="off"
            value={dadosCadastro.nome}
            onChange={(e) =>
              setDadosCadastro({ ...dadosCadastro, nome: e.target.value })
            }
            />
          </div>
          <div className="login-content__form-field">
            <input
            type="text"
            placeholder="E-mail"
            id="cadastro-email"
            name="cadastro-email"
            autoComplete="off"
            value={dadosCadastro.email}
            onChange={(e) =>
              setDadosCadastro({ ...dadosCadastro, email: e.target.value })
            }
            />
          </div>
          <div className="login-content__form-field">
            <input
            type="password"
            placeholder="Senha"
            id="cadastro-senha"
            name="cadastro-senha"
            autoComplete="off"
            value={dadosCadastro.senha}
            onChange={(e) =>
              setDadosCadastro({ ...dadosCadastro, senha: e.target.value })
            }
            />
          </div>
          <button
            className="btn btn-primary"
            type="button"
            disabled={isSubmitting}
            onClick={() => enviarCadastro(dadosCadastro)}
          >
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </button>
          {erro && <p className="login-form-error">* {erro}</p>}
        </form>
      </div>

      <div className="login-alternative-option">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onAbrirLogin();
          }}
        >
          Já tem uma conta? Entrar
        </a>
      </div>
    </div>
  );
}
