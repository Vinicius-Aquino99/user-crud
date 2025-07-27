import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import CadastroForm from "./components/CadastroForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import UserPage from "./components/UserPage";
import { UserProvider } from "./components/UserContext";

function AppWrapper() {
  return (
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Alterna entre login e cadastro
  const alternarRota = () => {
    if (location.pathname === "/") {
      navigate("/cadastro");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen p-6">
      <FaPlus
        className="fixed text-3xl text-slate-400 top-5 right-5 cursor-pointer hover:text-slate-200 transition-colors duration-200"
        onClick={alternarRota}
        title="Alternar entre login e cadastro"
      />
      <Routes>
        <Route path="/" element={<LoginForm navigate={navigate} />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;
