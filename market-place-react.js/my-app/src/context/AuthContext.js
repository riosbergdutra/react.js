import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Estado para controlar se o usuário está logado ou não
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoagind] = useState(true)

  // Hook do React Router para navegação
  const navigate = useNavigate();

  useEffect(() => {
    // Tente obter os dados do usuário do localStorage ao iniciar a aplicação
    const storedUserInfo = localStorage.getItem('userinfo');

    if (storedUserInfo) {
      // Se houver dados no localStorage, atualize o estado do usuário como logado
      setUserLogged(true);
    }
    setLoagind(false)
  }, []); // Este efeito só é executado uma vez ao montar o componente

  // Função para realizar o login do usuário
  const loginUser = async (inputValues) => {
    const response = await fetch('http://localhost:5000/usuario/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValues),
    });

    if (response.ok) {
      // Se a solicitação for bem-sucedida, obtenha os dados do usuário
      const data = await response.json();
      console.log('Dados do usuário:', data);

      // Salve os dados do usuário no localStorage
      localStorage.setItem('userinfo', JSON.stringify(data));
      
      // Atualize o estado do usuário como logado e redirecione para a página inicial
      setUserLogged(true);
      navigate('/');
    } else {
      // Se a solicitação falhar, registre um erro no console
      console.error('Falha na solicitação de login:', response.status);
    }
  };

  // Função para realizar o logout do usuário
  const logout = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate('/login');
  };

  if(loading) {
    return <h1>loading...</h1>
  }

  // Fornece o contexto para os componentes filhos
  return (
    <AuthContext.Provider value={{ userLogged, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exporta o contexto e o provedor para uso em outros componentes
export { AuthContext, AuthProvider };