const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  precoUnitario: {
    type: Number, 
    required: true,
    min: 0,
  },
  imagem: {
    type: String,
    required: true,
  },
  codigoBarra: {
    type: Number,
    required: true,
    unique: true,
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Categoria', 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;