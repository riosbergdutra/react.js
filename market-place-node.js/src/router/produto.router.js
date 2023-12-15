const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produto.controller')
router.get('/findAll', produtosController.listAllProdutosController);
router.get('/findById/:id', produtosController.getProdutoByIdController);
router.post('/create', produtosController.createProdutoController);
router.put('/update/:id', produtosController.updateProdutoController);
router.delete('/remove/:id', produtosController.deleteProdutoController);

module.exports = router;