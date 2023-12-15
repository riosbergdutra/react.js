const Categoria = require('../model/categoria');

const findAllCategoriesService = async () => {
    try {
        return await Categoria.find();
    } catch (err) {
        throw err;
    }
};

const createCategoriesService = async (categoriaData) => {
    try {
        const novaCategoria = new Categoria(categoriaData);
        return await novaCategoria.save();
    } catch (err) {
        throw err;
    }
};
const getCategoriesByIdService = async (id) => {
    try {
    return await Categoria.findById(id);
    } catch (err) {
    throw err;
    }
}
module.exports = {
    findAllCategoriesService,
    createCategoriesService,
    getCategoriesByIdService
};