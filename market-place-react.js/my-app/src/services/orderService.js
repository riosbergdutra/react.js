import api from "./api"

const sendCart = (cartInfo) => {
    api.post('/cart/create', cartInfo)
    .then(response => response)
    .catch(err => err)
}

export {sendCart}