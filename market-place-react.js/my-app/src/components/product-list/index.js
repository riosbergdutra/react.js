import React, { useState } from 'react'
import Product from '../product'

const Productlist = () => {
    const [categoriaTab, setcategoriatab] = useState('Hamburger')
  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        {/* {menu de categoria} */}
        <div className='flex items-center justify-center space-x-6'>
            <p className='menu-tab bg-primary'>Hamburger</p>
            <p className='menu-tab'>Brasileira</p>
            <p className='menu-tab'>Japonesa</p>
        </div>
        {/* lista de produtos */}
        <div className=''>
            <Product/>
        </div>
    </section>
  )
}

export default Productlist