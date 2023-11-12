import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Products from './pages/produtos';
import Product from './pages/produto';
import Notfound from './pages/notfound';
import Register from './pages/register';
import ProductReviews from './pages/productreviews';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
      {/* Remova a rota aninhada de /product/:id do escopo principal */}
      <Route path='/product/:id/*' element={<Product />}>
        {/* Aninhe /reviews dentro de /product/:id */}
        <Route index element={<ProductReviews />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<Notfound />} />
    </Routes>
  </div>
  );
}

export default App;