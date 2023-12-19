const Produto = require('../model/produto');

const listAllProdutos = async () => {
  try {
    return await Produto.find();
  } catch (err) {
    throw err;
  }
}

const createProduto = async (produtoData) => {
  try {
    const novaCategoria = new Produto(produtoData);
    return await novaCategoria.save();
} catch (err) {
    throw err;
}
};


const getProdutoById = async (id) => {
  try {
    return await Produto.findById(id);
  } catch (err) {
    throw err;
  }
}

const updateProduto = async (id, produtoData) => {
  try {
    return await Produto.findByIdAndUpdate(id, produtoData, { new: true });
  } catch (err) {
    throw err;
  }
}

const deleteProduto = async (id) => {
  try {
    await Produto.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  listAllProdutos,
  createProduto,
  getProdutoById,
  updateProduto,
  deleteProduto,
};