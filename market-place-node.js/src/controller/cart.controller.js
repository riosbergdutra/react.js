const cartService = require("../service/cart.service");

const findCartByIdController = async (req, res) => {
    try {
        const cart = await cartService.findCartByIdService(req.params.id);

        if (!cart) {
            return res.status(404).send({ message: "Carrinho não encontrado" });
        }

        return res.status(200).send(cart);
    } catch (err) {
        if (err.kind) {
            return res.status(400).send({ message: "Id informado está incorreto, tente novamente!" });
        }
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
    }
};

const findAllCartsController = async (req, res) => {
    try {
        res.status(200).send(await cartService.findAllCartsService());
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
    }
};

const createCartController = async (req, res) => {
    try {
        return res.status(201).send(await cartService.createCartService(req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateCartController = async (req, res) => {
    try {
        return res.send(await cartService.updateCartService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const removeCartController = async (req, res) => {
    try {
        const removedCart = await cartService.removeCartService(req.params.id);

        if (!removedCart) {
            return res.status(404).send({ message: "Carrinho não encontrado" });
        }

        res.status(200).send({ message: `Sucesso, carrinho removido!` });
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

module.exports = {
    findCartByIdController,
    findAllCartsController,
    createCartController,
    updateCartController,
    removeCartController,
};
