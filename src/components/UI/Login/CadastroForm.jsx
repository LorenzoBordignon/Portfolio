import { useState } from "react";
import "./Login.css";
import { supabase } from "../../../lib/supabaseClient";

export function CadastroForm({ onAbrirLogin, onAuthLoadingChange }) {
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [senhaConfirmada, setSenhaConfirmada] = useState("");
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

    if (dados.senha !== senhaConfirmada) {
      setErro("As senhas não coincidem.");
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
    setSenhaConfirmada("");
    setIsSubmitting(false);
    onAuthLoadingChange?.(false);

    console.log(data);
  }
  return (
    <div className="login-content " id="form-register">
      <h1>Cadastro</h1>
      <form
        className="login-content__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-content__form-field">
          <label htmlFor="cadastro-nome">Nome</label>
          <input
            type="text"
            id="cadastro-nome"
            name="cadastro-nome"
            value={dadosCadastro.nome}
            onChange={(e) =>
              setDadosCadastro({ ...dadosCadastro, nome: e.target.value })
            }
          />
        </div>
        <div className="login-content__form-field">
          <label htmlFor="cadastro-email">E-mail</label>
          <input
            type="text"
            placeholder="exemplo@email.com"
            id="cadastro-email"
            name="cadastro-email"
            value={dadosCadastro.email}
            onChange={(e) =>
              setDadosCadastro({ ...dadosCadastro, email: e.target.value })
            }
          />
        </div>
        <div className="login-content__form-field">
          <label htmlFor="cadastro-senha">Senha</label>
          <input
            type="password"
            id="cadastro-senha"
            name="cadastro-senha"
            value={dadosCadastro.senha}
            onChange={(e) =>
              setDadosCadastro({ ...dadosCadastro, senha: e.target.value })
            }
          />
        </div>
        <div className="login-content__form-field">
          <label htmlFor="cadastro-confirma-senha">Confirmar Senha</label>
          <input
            type="password"
            id="cadastro-confirma-senha"
            name="cadastro-confirma-senha"
            value={senhaConfirmada}
            onChange={(e) => setSenhaConfirmada(e.target.value)}
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
