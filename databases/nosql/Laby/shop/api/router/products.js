const express = require("express")
const router = express.Router();
const mongoose = require("mongoose")
//importuję model
const Product = require("../models/product")

router.get("/", (req, res, next) => {
    Product.find()
    .then(products => {
        res.status(200).json({
            wiadomość: "lista wszystkich produktów",
            lista: products
        })
    })
    .catch(err => res.status(500).json({wiadomość: err}))
})

router.post("/", (req, res, next) => {
    //tworzę obiekt bazodanowy
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    //zapis do bazy!!!!
    product.save()
    .then(result=>{
        res.status(201).json({
            wiadomość: "utworzenie nowego produktu",
            dane: result
        })
    })
    .catch(err => res.status(500).json({wiadomość: err}))
})

router.get("/:productId", (req, res, next) => {
    const id = req.params.productId
    Product.findByid(id).
    then(result =>{
        res.status(200).json({
            wiadomość: "Szczegóły produktu" + id,
            dane: result
        })
    })
})

router.put("/:productId", (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({wiadomość: "Zmiana danych produktu o numerze " + id}) 
})

router.delete("/:productId", (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({wiadomość: "Usunięcie produktu o numerze " + id})
})

module.exports = router