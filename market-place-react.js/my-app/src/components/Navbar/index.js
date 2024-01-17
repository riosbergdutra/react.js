import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BsFillCartFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
  const { userLogged, logout, userData } = useContext(AuthContext);
  console.log(`valor do contexto`, userLogged);
  const navigate = useNavigate();
 
  
  return (
    <header className='bg-white top-0 z-50 w-full'>
      <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
        <div className='flex flex-grow items-center'>
          <img src={logo} alt='logo' className='w-36 cursor-pointer' />
          <h1 className='text-center text-3xl font-semibold text-gray-700'>
            <Link to='/'>Food App</Link>
          </h1>
        </div>
        {userLogged ? (
          <div className=' flex items-center justify-end space-x-4'>
            <div className='relative flex cursor-pointer'>
              <span className='bg-primary w-4 h-4 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2'></span>
                <BsFillCartFill className='w-6 h-6 cursor-pointer' onClick={() => navigate('/cart')} />
            </div>
            <p className='text-gray-700'>
               Bem Vindo, {userData.nome} !
            </p>
            <Link to={'/admin'}>Admin</Link>
              {userData && userData.imagem && (
                <img src={userData.imagem} alt='imagem do usuario' className='w-10 h-10 rounded-full' />
              )}
            <MdLogout className='w-6 h-6 cursor-pointer' onClick={logout} />
          </div>
        ) : (
          <div className='flex items-center justify-end space-x-6'>
            <button onClick={() => navigate('/login')}>Login</button>
            <button
              onClick={() => navigate('/register')}
              className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'
            >
              Register
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;