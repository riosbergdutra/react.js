import React from 'react'
import Sucess from '../../assets/sucess.svg'
import { useNavigate } from 'react-router-dom'

const Complete  = () => {
  const navigate = useNavigate()
  return (
    <main className='h-screen banner'>
      <div className='max-w-screen-xl py-20 mx-auto px-6'>
        <div className='flex flex-col items-center justify-center h-3/4 pt-24'>
          <h1 className='text-3xl text-center text-primary font-semibold poppins flex space-x-6 items-center'>
            Pedido Realizado !
          </h1>
          <img src={Sucess} className='w-80 object-contain' alt='Imagem de sucesso'/>
          <button onClick={() => navigate('/')} className='bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105'>Voltar para Home</button>  
        </div>  
      </div>
    </main>
  )
}

export default Complete