import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //BrowserRouter - responsavel por informar que iremos usar o roteamento do browser e gerencia as rotas
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

