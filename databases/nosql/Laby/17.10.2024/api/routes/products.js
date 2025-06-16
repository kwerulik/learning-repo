const express = require("express")

const router = express.Router()

router.post("/", (req, res, next) =>(
    res.status(201).json({wiadomość: "dodanie nowego produktu"})
))

router.get("/", (req, res, next) =>(
    res.status(200).json({wiadomość: "Lista wszystkich produktów"})
))

module.exports = router