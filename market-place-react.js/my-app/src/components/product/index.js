import React from 'react';
import  hamburger from '../../assets/hamburger.jpg'
const Product = () => {
  return (
    <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
      <span className='bg-red-100 border border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Hamburger</span>
      <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={hamburger} alt='imagem do produto'/>
      <div className='flex flex-col items-center my-3 space-y-2'>
        <h1 className='text-gray-900 text-lg'>Hamburger suculento</h1>
        <p className='text-gray-500 text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
        <h2 className='text-gray-900 text-2xl font-bold'>$25,00</h2>
        <button className='bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover:shadow-xl hover:scale-105'>Pedir agora</button>
      </div>
    </div>
  );
};

export default Product;