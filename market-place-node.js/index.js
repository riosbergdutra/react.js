const express = require("express");
const ConnectToDatabase = require("./src/database/database");
const usuario = require("./src/router/usuario.router");
const produto = require("./src/router/produto.router"); 
const categoria = require('./src/router/categoria.router');
const cart = require("./src/router/cart.router")
const pedido = require("./src/router/pedido.router")

const cors = require('cors');

const app = express();

const port = 5000;

app.use(express.json());

ConnectToDatabase();

app.use(cors());
    
app.use("/usuario", usuario);
app.use("/produto", produto);  
app.use('/categoria', categoria);
app.use('/cart', cart)
app.use('/pedido', pedido)


app.get("/", (req, res) => {
    res.send({
        message: "Bem-vindo ao nosso marketplace"
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});