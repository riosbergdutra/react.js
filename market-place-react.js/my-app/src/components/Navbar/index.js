import React from 'react';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
      <header className='bg-transparent z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
          <img src={logo} alt='logo' className='w-36 cursor-pointer'/>
          <h1 className='text-center text-3xl font-semibold text-gray-700'>Food App</h1>
          </div>
          <div className='flex items-center justify-end space-x-6'>
          <button>Login</button>
          <button className='bg-primary px-6 py-3 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
          </div>
        </nav>
      </header>
   
  );
}

export default Navbar;