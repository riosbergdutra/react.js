import api from "./api";

const sendCart = (cartInfo) => {
  return api.post('/cart/create', cartInfo) 
    .then(response => response)
    .catch(err => err);
}

const addOrder = (order) => {
  return api.post('/pedido/create', order)
    .then(response => response)
    .catch(err => err);
}

export { sendCart, addOrder };
