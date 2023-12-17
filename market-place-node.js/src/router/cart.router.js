const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

// Rotas GET
router.get('/findById/:id', cartController.findCartByIdController);
router.get('/findAll', cartController.findAllCartsController);

// Rotas POST
router.post('/create', cartController.createCartController);

// Rotas PUT
router.put('/update/:id', cartController.updateCartController);

// Rotas DELETE
router.delete('/remove/:id', cartController.removeCartController);

module.exports = router;
