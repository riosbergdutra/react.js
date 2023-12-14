import React, { useEffect, useState, useCallback } from 'react';
import { findAllCategories } from '../../services/categoryservice';
import { MultiSelect } from "react-multi-select-component";
import {  findProductById, updateProductById } from '../../services/productservice';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [productForm, setProductForm] = useState({
    nome: "",
    descricao: "",
    precoUnitario: 0,
    imagem: "",
    codigoBarra: 0,
    categoria: "" 
  });

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProductById = useCallback(async () => {
    try {
      const response = await findProductById(id);
      setProductForm(response);
    } catch (error) {
      console.error('Erro ao obter produto por ID:', error);
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findAllCategories();
        if (Array.isArray(response)) {
          const categoriesSelect = response.map((categoria) => ({
            value: categoria._id,
            label: categoria.nome // ou a propriedade correta para o nome da categoria
          }));
          setCategories(categoriesSelect);
        } else {
          console.error('Erro: a resposta não é uma array:', response);
        }
        await getProductById();
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchData();
  }, [id, getProductById]);

  const handleChangeValues = (evento) => {
    setProductForm({
      ...productForm,
      [evento.target.name]: evento.target.value
    });
  };

  const handleSubmit =  async (evento) => {
    evento.preventDefault();
    const response = await updateProductById(id, productForm)
    if(response){
      navigate('/admin')
    }
  };


  return (
    <section className='my-12 max-w-screen mx-auto px-6'>
      <div className='flex flex-col space-y-2'> 
        <h1 className='text-2xl text-gray-600'>Edição de produtos</h1>
      </div>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="nome" className='text-gray-500'>Nome</label>
          <input
            type='text'
            id='nome'
            name='nome'
            value={productForm.nome}
            onChange={handleChangeValues}
            required
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-red-300 focus:outline-none transition duration-300'
          />
          
          <label htmlFor='descricao' className='text-gray-500'>Descrição</label>
          <textarea
            name='descricao'
            id='descricao'
            cols={30}
            rows={5}
            value={productForm.descricao}
            onChange={handleChangeValues}
            required
            className='border border-gray-300 rounded-lg py-3 px-4 w-full focus:border-red-500 focus:ring-red-300 focus:outline-none transition duration-300 resize-none'
          ></textarea>
          
          <label htmlFor="codigoBarra" className='text-gray-500'>Código de Barras</label>
          <input
            type='text'
            id='codigoBarra'
            name='codigoBarra'
            value={productForm.codigoBarra}
            onChange={handleChangeValues}
            required
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-red-300 focus:outline-none transition duration-300'
          />
        </div>
        <div className='flex flex-col space-y-4'>
          <label htmlFor="preco" className='text-gray-500'>Preço</label>
          <input
            type='text'
            id='preco'
            name='precoUnitario'
            value={productForm.precoUnitario}
            onChange={handleChangeValues}
            required
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-red-300 focus:outline-none transition duration-300'
          />

          <label htmlFor="imagem" className='text-gray-500'>Imagem</label>
          <input
            type='text'
            id='imagem'
            name='imagem'
            value={productForm.imagem}
            onChange={handleChangeValues}
            required
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-red-300 focus:outline-none transition duration-300'
          />

          <label htmlFor="title" className='text-gray-500'>
            Categoria:
          </label>
          <MultiSelect
            options={categories}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
          <div className='mt-8'>
            <button type='submit' className='w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>
              Adicionar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
