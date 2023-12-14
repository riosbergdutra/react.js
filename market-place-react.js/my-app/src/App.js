import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/login';
import {AuthProvider} from './context/AuthContext';
import ProctectedRoute from './routes/private-routes';
import Notfound from './pages/notfound';
import Register from './pages/register';
import Admin from './pages/admin';
import AddProduct from './pages/addproducts';
import EditProduct from './pages/editproduct';

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path='/' element={
        <ProctectedRoute>
          <Home/>
        </ProctectedRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<ProctectedRoute>
          <Admin/>
        </ProctectedRoute>}/>
        <Route path='/admin/add-product' element={<ProctectedRoute>
          <AddProduct/>
        </ProctectedRoute>}/>
        <Route path='/admin/edit-product/:id' element={<ProctectedRoute>
          <EditProduct/>
        </ProctectedRoute>}/>

        <Route path='/*' element={<Notfound/>} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
