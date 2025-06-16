const express = require("express");
const router = express.Router();
const mogoose = require("mongoose");

const User = require("../models/user")
//import bcrypta
const bcrypt = require("bcrypt")

router.post('/singup', (req,res,next)=>{
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) return res.status(500).json({wiadomosc: err})
        const user = new User({
            _id: new mongoose.Type.ObjectId(),
            email: req.body.email,
            password: hash,
        })
    })
    user
    .save()
    .then(() => res.status(201).json({wiadomosc:"Dodano uuzytkownika"}))
})