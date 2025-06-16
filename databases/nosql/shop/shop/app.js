//zmienne środowiskowe
require('dotenv').config()

// importuję expresa
const express = require("express")

// tworzę instancję expresa
const app = express()

//połączenie z bazą danych
const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@projektstudia.74j1l.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=ProjektStudia`)

//logger
const morgan = require("morgan")
app.use(morgan("dev"))

//parsowanie body
const bodyParser = require("body-parser")
app.use(bodyParser.json()) //od tej pory w req.body mam informacje z części body

// importuję routy
const productRoutes = require("./api/routes/products")
const userRoutes = require("./api/routes/users")

//stosuję routy
app.use("/products", productRoutes)
app.use("/users", userRoutes)

//błąd routu
app.use((req, res, next) => {
    res.status(404).json({wiadomość: "Not Found"})
})

module.exports = app