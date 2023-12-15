const express = require("express");
const ConnectToDatabase = require("./src/database/database");
const usuario = require("./src/router/usuario.router");
const produto = require("./src/router/produto.router"); 
const categoria = require('./src/router/categoria.router');
const cors = require('cors');

const app = express();

const port = 5000;

app.use(express.json());

ConnectToDatabase();

app.use(cors());
    
app.use("/usuario", usuario);
app.use("/produto", produto);  
app.use('/categoria', categoria);

app.get("/", (req, res) => {
    res.send({
        message: "Bem-vindo ao nosso marketplace"
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});