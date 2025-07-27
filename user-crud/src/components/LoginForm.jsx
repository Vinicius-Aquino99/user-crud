import React, { useState } from "react";
import { useUser } from "./UserContext"; // Acessa o contexto do usuário

const LoginForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUserDetails } = useUser(); // Acessa a função para definir os dados do usuário

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert(data.mensagem); // Exibe a mensagem do backend
        setUserDetails(data.usuario); // Armazena os dados do usuário no contexto
        navigate("/user-page"); // Redireciona para a página do usuário
      } else {
        alert(data.mensagem); // Exibe mensagem de erro caso o login falhe
      }
    } catch (error) {
      setLoading(false);
      console.error("Erro ao fazer login:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="w-lg bg-slate-400 rounded-2xl p-6 shadow-2xl shadow-slate-950">
      <form onSubmit={handleSubmit} className="border-2 rounded-lg p-6 border-slate-800">
        <fieldset className="border rounded-lg p-2">
          <legend className="ml-4 font-semibold">Email</legend>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:outline-none focus:border-0 w-full"
            required
          />
        </fieldset>

        <fieldset className="border rounded-lg p-2">
          <legend className="ml-4 font-semibold">Senha</legend>
          <input
            type="password"
            value={senha}
            className="focus:outline-none focus:border-0 w-full"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </fieldset>

        <button
          type="submit"
          className="flex p-4 bg-slate-800 mt-4 rounded-2xl w-full justify-center text-slate-400 font-semibold hover:bg-slate-300 hover:text-slate-800 transition-all ease duration-500"
          disabled={loading}
        >
          {loading ? "Carregando..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
