import React, { useContext } from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const userLogged = useContext(AuthContext);
  console.log(`valor do contexto`,userLogged);

  return (
    <header className='bg-transparent z-50 w-full'>
      <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
        <div className='flex flex-grow items-center'>
          <img src={logo} alt='logo' className='w-36 cursor-pointer'/>
          <h1 className='text-center text-3xl font-semibold text-gray-700'><Link to='/'>Food App</Link></h1>
        </div>
        <div className='flex items-center justify-end space-x-6'>
          <button><Link to='/login'>Login</Link></button>
          <button className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;