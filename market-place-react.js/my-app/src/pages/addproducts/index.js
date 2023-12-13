import React, { useEffect, useState } from 'react';
import { findAllCategories } from '../../services/categoryservice';
import { MultiSelect } from "react-multi-select-component";
import { addProductApi } from '../../services/productservice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productForm, setProdutForm] = useState({
    nome: "",
    descricao: "",
    precoUnitario: 0,
    imagem: "",
    codigoBarra: 0,
    categoria: [{ _id: "" }]
  });
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findAllCategories();
        
        if (Array.isArray(response)) {
          const categoriesSelect = response.map((categoria) => ({
            value: categoria._id,
            label: categoria.nome
          }));
          setCategories(categoriesSelect);
        } else {
          console.error('Erro: a resposta não é uma array:', response);
        }
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleChangeValues = (evento) => {
    setProdutForm({
      ...productForm,
      [evento.target.name]: evento.target.value
    });
    console.log(productForm);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const categoriesId = selected.map(category => {
      return {
        _id: category.value
      };
    });
    const product = {
      ...productForm,
      categorias: categoriesId,
      precoUnitario: parseInt(productForm.precoUnitario),
      codigoBarra: parseInt(productForm.codigoBarra)
    };

    addProductApi(product)
      .then(response => {
        if (response) {
          navigate('/admin');
        }
      })
      .catch(error => {
        console.error('Erro ao adicionar o produto:', error);
        // Lide com o erro conforme necessário
      });
  };

  return (
    <section className='my-12 max-w-screen mx-auto px-6'>
      <div className='flex flex-col space-y-2'> 
        <h1 className='text-2xl text-gray-600'>Cadastro de produtos</h1>
      </div>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="nome" className='text-gray-500'>Nome</label>
          <input
            type='text'
            id='nome'
            name='nome'
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
            onChange={handleChangeValues}
            required
            className='border border-gray-300 rounded-lg py-3 px-4 w-full focus:border-red-500 focus:ring-red-300 focus:outline-none transition duration-300 resize-none'
          ></textarea>
          
          <label htmlFor="codigoBarra" className='text-gray-500'>Código de Barras</label>
          <input
            type='text'
            id='codigoBarra'
            name='codigoBarra'
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
            onChange={handleChangeValues}
            required
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-red-300 focus:outline-none transition duration-300'
          />

          <label htmlFor="imagem" className='text-gray-500'>Imagem</label>
            <input
              type='text'
              id='imagem'
              name='imagem'
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
                <button className='w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>
                  Adicionar
                </button>
              </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct