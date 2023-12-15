const mongoose = require("mongoose")

function ConnectToDatabase() {
    mongoose.connect('mongodb+srv://riosbergduttra:kDAbpYuhUn2Nz7Aj@marketplace.tnwvd4o.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log("MongoDB conectado");
        }).catch((err) => {
            console.error(`Erro na conexão MongoDB: ${err}`);
        });
}

module.exports = ConnectToDatabase