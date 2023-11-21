import React from 'react';
import logo from '../../assets/logo.svg';

const Login = () => {
  return (
    <main className='h-screen w-full banner'>
      <div className='flex flex-col items-center pt-20 h-screen'>
        <img className='w-52' src={logo} alt='logo-tipo food app' />
        <form
          action=''
          className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'
        >
          <div className='flex flex-col space-y-6'>
            <input
              type='email'
              placeholder='Digite seu email:'
              name='email'
              className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
            />
            <input
              type='password'
              placeholder='Digite sua senha:'
              name='senha'
              className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
            />
          </div>
          <button className='w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>
            Entrar
          </button>
          <p className='text-base text-primary text-center my-6 hover:underline cursor-pointer'> precisa de uma conta ?</p>
        </form>
      </div>
    </main>
  );
};

export default Login;