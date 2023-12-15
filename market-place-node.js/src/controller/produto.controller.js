const produtoService = require('../service/produto.service');


const createProdutoController = async (req, res) => {
  try {
      const categoriaSalva = await produtoService.createProduto(req.body);
      res.status(201).json(categoriaSalva);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

const listAllProdutosController = async (req, res) => {
  try {
    const produtos = await produtoService.listAllProdutos();
    res.json(produtos);
  } catch (err) {
    console.error(`Erro ao listar produtos: ${err.message}`);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};

const getProdutoByIdController = async (req, res) => {
  try {
    const produto = await produtoService.getProdutoById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    res.json(produto);
  } catch (err) {
    console.error(`Erro ao obter produto por ID: ${err.message}`);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};



const updateProdutoController = async (req, res) => {
  try {
    const updatedProduto = await produtoService.updateProduto(req.params.id, req.body);
    res.json(updatedProduto);
  } catch (err) {
    console.error(`Erro ao atualizar produto: ${err.message}`);
    res.status(400).json({ message: 'Requisição inválida.' });
  }
};

const deleteProdutoController = async (req, res) => {
  try {
    await produtoService.deleteProduto(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    console.error(`Erro ao excluir produto: ${err.message}`);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};

module.exports = {
  listAllProdutosController,
  getProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};