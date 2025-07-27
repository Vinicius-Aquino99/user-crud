import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext"; // Acessa o contexto do usuário

const UserPage = () => {
  const { user, setUserDetails } = useUser(); // Acessa os dados do usuário e a função para limpar o usuário
  const navigate = useNavigate(); // Hook de navegação

  // Se não houver usuário, significa que o usuário não está autenticado
  if (!user) {
    return <div>Você não está autenticado. Faça login primeiro.</div>;
  }

  const handleLogout = () => {
    setUserDetails(null); // Limpa os dados do usuário no contexto
    navigate("/"); // Redireciona o usuário para a página de login
  };

  return (
    <div className="w-lg bg-slate-400 rounded-2xl p-6 shadow-2xl shadow-slate-950">
      <h1>Bem-vindo, {user.nome}</h1>
      <p>Email: {user.email}</p>

      {/* Botão de logout */}
      <button
        onClick={handleLogout}
        className="mt-4 p-4 bg-red-600/80 text-white rounded-2xl w-full justify-center font-semibold hover:bg-red-500 transition-all ease duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default UserPage;
