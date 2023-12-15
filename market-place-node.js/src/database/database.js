const mongoose = require("mongoose")

function ConnectToDatabase() {
    mongoose.connect('mongodb+srv://riosbergduttra:kDAbpYuhUn2Nz7Aj@marketplace.tnwvd4o.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("mongo db conectado")
    ).catch((err) => {
        return console.log(`erro na conexão ${err}`)
    })
}

module.exports = ConnectToDatabase