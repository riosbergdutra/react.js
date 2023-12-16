import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('productCart')) || [];
    setProductCart(storageCart);
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
                {Array.isArray(productCart) &&
                  productCart.map((product) => (
                    <div key={product._id} className='rounded-lg p-4 space-x-3'>
                      <div className="flex">
                        <img className='w-24 object-contain' src={product.imagem} alt={product.nome}/>
                        </div>
                        <div className='flex flex-col space-y-3 flex-grow'>
                            <h5 className='flex-base poppins text-gray-700'>{product.nome}</h5>
                            <h3 className='font-semibold text-lg text-primary poppins'>R${product.precoUnitario}</h3>
                        </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
