import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';

// Criação do ponto de entrada da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderização da aplicação dentro do Provider Redux
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Configuração para medir o desempenho da aplicação
reportWebVitals();