import React from 'react'
import Productlist from '../../components/product-list'

const Home = () => {
  return (
    <>
    <section className='home-banner w-full'>
      <div className='flex flex-col items-center justify-center h-full'>
    <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>Os melhores alimentos você encontra aqui</h1>
    </div>
    </section>
    <Productlist/>
    </>
  )
}

export default Home