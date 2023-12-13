import api from "./api";

const findAllCategories = () => {
    return api.get('/categoria/findAll')
      .then((response) => response.data)
      .catch(err => err);
  };
  const CategoriesUserId = async (id) => {
    try {
        const response = await api.get(`/categoria/findById/${id}`);
        return response.data; // Retorna apenas os dados da resposta
    } catch (error) {
        console.error(error);
        throw error; // Lança o erro para ser tratado no componente que chama esta função
    }
};
  export { findAllCategories, CategoriesUserId };