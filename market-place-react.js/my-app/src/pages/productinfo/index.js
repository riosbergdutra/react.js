import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import { findProductById } from '../../services/productservice';

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  const getProductById = useCallback(async () => {
    try {
      const response = await findProductById(id);
      setProduct(response);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
    }
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProductById();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [getProductById])

  const addToCart = () => {
    const productCart = [
      {
        ...product,
        quantity: quantity,
      }
    ]
    const storageCart = JSON.parse(localStorage.getItem('productCart'))
    if(storageCart) {
      productCart.push(
        storageCart
        )
      console.log(productCart)
    }

    localStorage.setItem('productCart', JSON.stringify(productCart))
  }
  
  return (
    <main className='max-w-screnn mx-auto px-6 my-3'>
      <div className='flex flex-col justify-start items-center h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
          <div className='order-2 md:order-1 lg:order-1 flex flex-col justify-center'>
            <h1 className='text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins mb-4 text-gray-700 select-none'>
              {product.nome}
            </h1>
            <p className='text-center md:text-left lg:text-left text-sm text-gray-500 leading-relaxed select-none'>
              {product.descricao}
            </p>
            <div className='flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8'>
              <h2 className='text-3xl font-bold text-black poppins select-none'>
                {product.precoUnitario}
              </h2>
              <div className='flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full'>
                <AiOutlineMinusSquare
                  onClick={() => {
                    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                  }}
                  className='text-2xl w-8 h-8 rounded-full text-orange-600 hover:scale-105 transform transition duration-500 cursor-pointer px-1'
                />
                <span className='text-lg text-gray-700 poppins select-none'>{quantity}</span>
                <AiOutlinePlusSquare
                  onClick={() => {
                    setQuantity(quantity + 1)
                  }}
                  className='text-2xl w-8 h-8 rounded-full text-orange-600 hover:scale-105 transform transition duration-500 cursor-pointer px-1'
                />
              </div>
            </div>
            <div className='mt-8 flex items-center justify-center md:justify-start lg:justify-start'>
              <button onClick={addToCart} className='flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-10'>
                <FiShoppingCart className='text-xl' />
                <span>Add</span>
              </button>
            </div>
          </div>
          <div className='order-1 md:order-2 lg:order-2'>
            <img src={product.imagem} alt='imagem do produto' className='w-3/4 md:w-3/4 lg:w-full mx-auto'/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductInfo