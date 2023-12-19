const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const findAllPedidosController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findAllPedidosService(req.query.limit, req.query.offset));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const createPedidoController = async (req, res) => {
    try {
        return res.status(201).send(await pedidoService.createPedidoService(req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const deletePedidoController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.deletePedidoService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const updateStatusPedidoController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

module.exports = {
    findPedidoByIdController,
    findAllPedidosController,
    createPedidoController,
    deletePedidoController,
    updateStatusPedidoController
}