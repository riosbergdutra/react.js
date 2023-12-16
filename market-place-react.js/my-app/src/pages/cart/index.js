import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const [productCart, setProductCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('productCart')) || [];
    setProductCart(storageCart);
    const total = storageCart.reduce((valor, product) => {
      return valor + product.precoUnitario
    }, 0)
    setTotalValue(total)
  }, []);

  return (
    <main className='h-screen banner'>
      <div className='max-w-screen-xl py-20 mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
          {/* informações endereço */}
          <div className='col-span-1'>
            <div className='flex flex-col mt-20'>
              <h2 className='text-2xl poppins pb-4 border-b border-gray-500 text-gray-700'>
                Adicione o endereço
              </h2>
              <form className='my-4'>
                <div className='flex flex-col space-y-3'>
                  <input
                    type='text'
                    name='cep'
                    placeholder='cep'
                    id='cep'
                    className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
                  />
                  <input
                    type='text'
                    name='rua'
                    placeholder='rua'
                    id='rua'
                    className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
                  />
                  <input
                    type='text'
                    name='numero'
                    placeholder='numero'
                    id='numero'
                    className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
                  />
                  <input
                    type='text'
                    name='complemento'
                    placeholder='complemento'
                    id='complemento'
                    className='w-full px-4 py-3 rounded-lg ring-red-200 border-gray-300 focus:ring-4 focus:outline-none transition duration-300'
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='grass p-6 box-border rounded-lg'>
              <div className='flex flex-col space-y-3'>
                {productCart &&
                  productCart.map((product) => (
                    <div key={product._id} className='rounded-lg p-4 space-x-3 flex'>
                      <img className='w-24 object-contain' src={product.imagem} alt={product.nome} />
                      <div className='flex flex-col space-y-3'>
                        <h5 className='poppins text-gray-1000'>{product.nome}</h5>
                        <h3 className='font-semibold text-red-600 poppins'>{`R$${product.precoUnitario}`}</h3>
                      </div>
                      <div className='flex items-center px-4 py-2 space-x-3'>
                        <span className='text-lg text-gray-500 select-none'>
                          {product.quantity}un                 
                        </span>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                      <AiOutlineDelete className='w-6 h-6 text-gray-600 transform transition hover:scale-105 duration-500 cursor-pointer'/>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='flex flex-col space-y-3 my-4'>
                <div className='flex items-center'>
                  <span className='flex-grow poppins text-gray-700'>
                    total
                  </span>
                  <span className='poppins font-semibold text-black'>
                    RS{totalValue}
                  </span>
                </div>
                <div className='flex items-center'>
                  <span className='flex-grow poppins text-gray-700'>
                    Taxa de entrega
                  </span>
                  <span className='poppins font-semibold text-black'>
                    5
                  </span>
                </div>
                <div className='flex items-center'>
                  <span className='flex-grow poppins text-gray-700 text-xl'>
                    Total + taxa:
                  </span>
                  <span className='poppins font-semibold text-black text-xl'>
                    R${totalValue + 5}
                  </span>
                </div>
                <div>
                <button className='w-full px-6 py-3 bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500'>
                  Enviar Pedido
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
