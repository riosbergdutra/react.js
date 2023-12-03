import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/login';
import {AuthProvider} from './context/AuthContext';
import ProctectedRoute from './routes/private-routes';

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
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
