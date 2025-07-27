import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login bem-sucedido: " + data.mensagem);
        console.log(data.usuario);
      } else {  
        alert("Erro:" + data.mensagem);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="w-lg bg-slate-400 rounded-2xl p-6 shadow-2xl shadow-slate-950">
      <form 
        onSubmit={handleSubmit}
        className="border-2 rounded-lg p-6 border-slate-800"
      >
        <fieldset className="border rounded-lg p-2">
          <legend className="ml-4 font-semibold">Email</legend>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
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
            onChange={(e) => {setSenha(e.target.value)}}
            required
          />
        </fieldset>

        <button
          type="submit"
          className="flex p-4 bg-slate-800 mt-4 rounded-2xl w-full justify-center text-slate-400 font-semibold hover:bg-slate-300 hover:text-slate-800 transition-all ease duration-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
