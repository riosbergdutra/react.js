import React, { useEffect, useState } from 'react';
import Product from '../product';
import { findAllProducts } from '../../services/productservice'

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

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
