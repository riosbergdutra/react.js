const categoriaService = require('../service/categoria.service');

const findAllCategoriesController = async (req, res) => {
    try {
        const categorias = await categoriaService.findAllCategoriesService();
        res.json(categorias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createCategoriesController = async (req, res) => {
    try {
        const categoriaSalva = await categoriaService.createCategoriesService(req.body);
        res.status(201).json(categoriaSalva);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const getCategoriaByIdController = async (req, res) => {
    try {
      const produto = await categoriaService.getCategoriesByIdService(req.params.id);
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado.' });
      }
      res.json(produto);
    } catch (err) {
      console.error(`Erro ao obter produto por ID: ${err.message}`);
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  };
  
module.exports = {
    findAllCategoriesController,
    createCategoriesController,
    getCategoriaByIdController
};