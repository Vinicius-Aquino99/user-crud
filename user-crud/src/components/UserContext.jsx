import React, { createContext, useContext, useState } from "react";

// Criação do contexto
const UserContext = createContext();

// Hook para acessar o contexto em qualquer componente
export const useUser = () => useContext(UserContext);

// Componente Provider que envolve toda a aplicação
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para armazenar os dados do usuário

  const setUserDetails = (userDetails) => {
    setUser(userDetails); // Função para atualizar as informações do usuário
  };

  return (
    <UserContext.Provider value={{ user, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
