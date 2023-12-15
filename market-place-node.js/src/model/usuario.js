const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const usuarioSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    imagem: { type: String },
    produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produto' }],
});

usuarioSchema.pre("save", async function(next) {
    if (this.senha) {
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;