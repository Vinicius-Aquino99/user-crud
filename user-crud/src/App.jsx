import React from "react";
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

function AppWrapper() {
  return (
    <Router>
      <App />
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
          title="alternar login/cadastro"
        />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastro" element={<CadastroForm />} />
        </Routes>
    </div>
  );
}

export default AppWrapper;
