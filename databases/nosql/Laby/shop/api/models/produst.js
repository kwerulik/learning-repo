const mongoose = require("mongoose")

//schemat produktu 
const productSchema = mongoose.Schema({
    //Id nie trzeba wpisywac 
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number
})

module.exports = mongoose.model("Product", productSchema)