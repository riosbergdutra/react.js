const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Produto" },
            quantidade: { type: Number, required: true }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    precoTotal: { type: Number, required: true},
    frete: { type: Number, required: true},
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;