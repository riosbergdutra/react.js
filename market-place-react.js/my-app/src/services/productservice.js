import api from "./api";

const addProductApi = (product) => {
  return api.post('/produto/create', product)
    .then((response) => response)
    .catch((err) => Promise.reject(err));  // Retornar uma Promise rejeitada em caso de erro
};
const findAllProducts = () => {
 return api.get('/produto/findAll') 
  .then((response) => response)
  .catch((err) => Promise.reject(err));
}
const findProductById = async (id) => {
  try {
    const response = await api.get(`/produto/findById/${id}`);
    return response.data; // Retorna apenas os dados da resposta
} catch (error) {
    console.error(error);
    throw error; // Lança o erro para ser tratado no componente que chama esta função
}
};
const updateProductById = (id, productEdit) => {
 return api.put(`/produto/update/${id}`, productEdit)
  .then((response) => response)
  .catch((err) => Promise.reject(err));
}

const deleteProductById = (id) => {
  return api.delete(`/produto/remove/${id}`)
   .then((response) => response)
   .catch((err) => Promise.reject(err));
 }

export { addProductApi, findAllProducts, findProductById, updateProductById, deleteProductById };