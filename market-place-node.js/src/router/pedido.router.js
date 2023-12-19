const express = require('express');
const router = express.Router();
const PedidoController = require('../controller/pedido.controller');

router.get('/findAll', PedidoController.findAllPedidosController);
router.get('/findById/:id', PedidoController.findPedidoByIdController);
router.post('/create', PedidoController.createPedidoController);
  router.put('/update/:id', PedidoController.updateStatusPedidoController);
router.delete('/remove/:id', PedidoController.deletePedidoController);

module.exports = router;