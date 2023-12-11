import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi, loginUserId } from "../services/authservice";

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
  
      if (data && data.email && data.senha) {
        console.log('Dados do usuário após login:', data);
  
        const updatedUserData = {
          ...data,
          nome: data.nome || '',
          imagem: data.imagem || ''
        };
  
        localStorage.setItem('userinfo', JSON.stringify({ id: data._id, nome: data.nome || '', imagem: data.imagem || '' }));
        setUserData(updatedUserData);
        setUserLogged(true);
        navigate('/');
      } else {
        console.error('ID do usuário não encontrado nos dados:', data);
        // Se o ID não está diretamente em data._id, ajuste de acordo com a estrutura da resposta da sua API
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      // Trate o erro conforme necessário
    }
  };
  const logout = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate('/login');
  };

  return { userLogged, loading, loginUser, logout, userData };
}

export default UseAuth;

