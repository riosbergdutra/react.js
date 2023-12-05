import React, { createContext } from 'react';
import UseAuth from '../hooks/useauth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const {userLogged, loading, loginUser, logout} = UseAuth()
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