import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { findAllProducts } from '../../services/productservice';
const Admin = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {   
        getAllProducts()
    }, [])

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
        <section className='my-12 max-w-screen mx-auto px-6'>
            <div className='flex justify-end space-y-2'>
                <button onClick={() => navigate('/admin/add-product')} className='bg-primary w-44 px-2 py-3 text-white rounded-full transition duration-700 hover:scale-105'>
                    Adicionar Produto
                </button>
            </div>
            <div className='flex flex-col my-8'>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden sm:rounded-lg shadow-md'>
            <table className='min-w-full'>
            <thead className='bg-primary'>
                <tr>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                        Imagem
                    </th>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                       Nome
                    </th>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                        Preço
                    </th>
                    <th scope='col' className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>
                        Código de Barras
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                        <span className='text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider'>Açôes</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                <tr key={product._id} className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <img className='w-16' src={product.imagem} alt='img'/>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        {product.nome}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                         {product.precoUnitario}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        {product.codigoBarra}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center'>
                        <div className='flex items-center justify-center space-x-3'>
                        <Link to={`/admin/edit-product/${product._id}`}>
                        <   FaEdit className='cursor-pointer text-2xl text-blue-600' />
                        </Link>
                        <MdDelete className='cursor-pointer text-2xl text-red-600' />    
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            </div>
            </div>       
             </div>
            </div>
    
        </section>
      )
    }
    
    export default Admin
