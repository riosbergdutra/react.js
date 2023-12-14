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
export { addProductApi, findAllProducts };