//importuje expressa
const express = require("express")

//Tworze Instancje expressa
const app = express()

//Importuje routy
const productRouts = require("./api/routes/products")

//Stosuje routy

app.use("/products", productRouts)

app.use((req, res, next) => (
    res.status(200).json({wiadomość: "Wszystko śmiga"})
))


module.exports = app
