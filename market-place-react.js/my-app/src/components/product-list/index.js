import React, { useEffect, useState } from 'react';
import Product from '../product';
import { findAllProducts } from '../../services/productservice';

const Productlist = () => {
  const [categoriaTab, setCategoriaTab] = useState('Hamburger');
  const [products, setProducts] = useState ([])

  useEffect(() =>{
    getAllProducts()
  },[])


  const getAllProducts = async () => {
    try {
        const response = await findAllProducts();
        const data = response.data;
        setProducts(data);
    } catch (error) {
        console.error("Erro ao obter produtos:", error);
    }
};
  return (
    <>
      <section className='my-12 max-w-screen-xl mx-auto px-3'>
        {/* {menu de categoria} */}
        <div className='flex items-center justify-center space-x-6'>
          <p
            className={
              categoriaTab === 'Hamburger'
                ? 'active-menu-tab bg-primary'
                : 'menu-tab'
            }
            onClick={() => setCategoriaTab('Hamburger')}
          >
            Hamburger
          </p>
          <p
            className={
              categoriaTab === 'Brasileira'
                ? 'active-menu-tab bg-primary'
                : 'menu-tab'
            }
            onClick={() => setCategoriaTab('Brasileira')}
          >
            Brasileira
          </p>
          <p
            className={
              categoriaTab === 'Japonesa'
                ? 'active-menu-tab bg-primary'
                : 'menu-tab'
            }
            onClick={() => setCategoriaTab('Japonesa')}
          >
            Japonesa
          </p>
        </div>
        {/* lista de produtos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
        {products.map(product => (
  <Product key={product._id} product={product} />
))}
         
        </div>
      </section>
    </>
  );
};

export default Productlist;