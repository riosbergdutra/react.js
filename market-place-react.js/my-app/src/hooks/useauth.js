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
    // Tente obter os dados do usuário do localStorage ao iniciar a aplicação
    const storedUserInfo = localStorage.getItem('userinfo');

    console.log("Dados do localStorage:", storedUserInfo);

    if (storedUserInfo) {
      setUserData(JSON.parse(storedUserInfo));
      setUserLogged(true);
    }

    setLoading(false);
  }, []); // Este efeito só é executado uma vez ao montar o componente

  // Função para realizar o login do usuário
  const loginUser = async (inputValues) => {
    try {
      const data = await loginUserApi(inputValues);
  
      if (data && data._id) {
        console.log('Dados do usuário após login:', data);
  
        const response = await loginUserId(data._id);
  
        console.log('Resposta da API de loginUserId:', response);
  
        // Verifique se a resposta contém a propriedade 'nome'
        if (response && response.nome) {
          // Certifique-se de incluir a propriedade 'imagem' ao atualizar o estado
          const updatedUserData = { ...data, ...response, nome: response.nome, imagem: response.imagem || '' };
  
          localStorage.setItem('userinfo', JSON.stringify({ data, response, nome: response.nome, imagem: response.imagem || '' }));
  
          setUserData(updatedUserData);
          setUserLogged(true);
          navigate('/');
        } else {
          console.error('Nome do usuário não encontrado nos dados da resposta:', response);
        }
      } else {
        console.error('ID não encontrado nos dados do usuário:', data);
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

