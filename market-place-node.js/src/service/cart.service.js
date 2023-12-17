const Cart = require("../model/cart");

const findCartByIdService = (id) => {
   return Cart.findById(id);
}

const findAllCartsService = () => {
   return Cart.find();
}

const createCartService = (body) => {
   return Cart.create(body);
}

const updateCartService = (id, body) => {
   return Cart.findByIdAndUpdate(id, body, { new: true });
}

const removeCartService = (id) => {
   return Cart.findByIdAndDelete(id);
}

module.exports = {
   findCartByIdService,
   findAllCartsService,
   createCartService,
   updateCartService,
   removeCartService,
};
