import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    senha: ''
})

const navigate = useNavigate()

  const handleChangeValues = (evento) => {
    console.log(evento.target.name)
    console.log(evento.target.value)
    setInputValues({
      ...inputValues,
      [evento.target.name]: evento.target.value
    })
    console.log(inputValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
   /* futuramente vai colocar uma fetch com login const response = await fetch('http://localhost:3000/auth/login {
    method: 'POST',
    headers: {
     'content:type': 'aplication/json
    },
    body: JSON.stringfy(inputValues)
    //})*/
    alert(`usuario ${inputValues.email} logado com sucesso`)
    navigate('/')
  }

  return (
    <main className='h-screen w-full banner'>
      <div className='flex flex-col items-center pt-20 h-screen'>
        <img className='w-52' src={logo} alt='logo-tipo food app' />
        <form onSubmit={handleSubmit}
          action=''
          className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'
        >
          <div className='flex flex-col space-y-6'>
            <input
              type='email'
              placeholder='Digite seu email:'
              name='email'
              className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
              onChange={handleChangeValues}
            />
            <input
              type='password'
              placeholder='Digite sua senha:'
              name='senha'
              className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
              onChange={handleChangeValues}
            />
          </div>
          <button type='submit' className='w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>
            Entrar
          </button>
          <p className='text-base text-primary text-center my-6 hover:underline cursor-pointer'> precisa de uma conta ?</p>
        </form>
      </div>
    </main>
  );
};

export default Login;