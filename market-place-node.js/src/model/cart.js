const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   produtos: [
      {
         produtoId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Produto" },
         quantidade: { type: Number, required: true }
      },
   ],
   createdAt: { type: Date, required: true, default: Date.now() },
   precoTotal: { type: Number, required: true },
   frete: { type: Number, required: true },
   userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario' }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
