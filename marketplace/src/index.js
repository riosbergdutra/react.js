import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Navmenu from './components/navmenu';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //BrowserRouter - responsavel por informar que iremos usar o roteamento do browser e gerencia as rotas
  <React.StrictMode>
    <BrowserRouter>
    <Navmenu></Navmenu>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
);

