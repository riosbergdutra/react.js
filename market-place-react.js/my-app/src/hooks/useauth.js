import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi } from "../services/authservice";

const UseAuth = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  // Hook do React Router para navegação
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userinfo');

    console.log("Dados do localStorage:", storedUserInfo);

    if (storedUserInfo) {
      setUserData(JSON.parse(storedUserInfo));
      setUserLogged(true);
    }

    setLoading(false);
  }, []); 

  // Função para realizar o login do usuário
  const loginUser = async (inputValues) => {
    try {
      const data = await loginUserApi(inputValues);
  
      if (data && data.email && data.senha && data.nome && data.imagem) {
        console.log('Dados do usuário após login:', data);
  
        localStorage.setItem('userinfo', JSON.stringify({ id: data._id, email: data.email, senha: data.senha, nome: data.nome, imagem: data.imagem }));
        setUserData(data);
        setUserLogged(true);
        navigate('/');
      } else {
        console.error('Dados do usuário incompletos:', data);
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      // Trate o erro conforme necessário
    }
  };
  // Função para realizar o logout do usuário
  const logout = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate('/login');
  };

  return { userLogged, loading, loginUser, logout, userData };
}

export default UseAuth;