import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Products from './pages/produtos';
import Product from './pages/produto';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
