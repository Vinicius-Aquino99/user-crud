import React from 'react'
import { useState } from 'react'

const CadastroForm = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/cadastro', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, nome, senha})
      });

      const data = await response.json();

      if(response.ok) {
        alert(data.mensagem)
      } else {
        alert(data.mensagem)
      }

    } catch (error) {
      alert("Erro ao conectar com o servidor.")
    }
  }

  return (
    <div className="w-lg bg-slate-400 rounded-2xl p-6 shadow-2xl shadow-slate-950">
      <form onSubmit={handleSubmit} className="border-2 rounded-lg p-6 border-slate-800">
        <fieldset className="border rounded-lg p-2">
          <legend className="ml-4 font-semibold">Nome Completo</legend>
          <input value={nome} onChange={(e) => {setNome(e.target.value)}} type="text" className="focus:outline-none focus:border-0 w-full" />
        </fieldset>

        <fieldset className="border rounded-lg p-2">
          <legend className="ml-4 font-semibold">Email</legend>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" className="focus:outline-none focus:border-0 w-full" />
        </fieldset>

        <fieldset className="border rounded-lg p-2">
          <legend className="ml-4 font-semibold">Senha</legend>
          <input
            value={senha} onChange={(e) => {setSenha(e.target.value)}}
            type="password"
            className="focus:outline-none focus:border-0 w-full"
          />
        </fieldset>

        <button
          type="submit"
          className="flex p-4 bg-slate-800 mt-4 rounded-2xl w-full justify-center text-slate-400 font-semibold hover:bg-slate-300 hover:text-slate-800 transition-all ease duration-500"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default CadastroForm
