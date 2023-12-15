const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoria.controller');

router.get('/findAll', categoriaController.findAllCategoriesController);
router.get('/findById/:id', categoriaController.getCategoriaByIdController);
router.post('/create', categoriaController.createCategoriesController);

module.exports = router;