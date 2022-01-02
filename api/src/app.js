require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const Product = require('./ProductModel')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL,(err)=>{
    if (!err) {
        console.log('db active')
    }
})

var urlEncodedParser = bodyParser.urlencoded()

const app = express();
app.use(cors());
app.use(express.json());

app.post('/productlist',urlEncodedParser,(req,res,next)=>{
    let tmp = new Product({
        url:req.body.url,
        name:req.body.name,
        description:req.body.description,
        artiste:req.body.artiste,
        price:req.body.price
    })
    tmp.save((err)=>{
        if (err) {
            throw err
        }
        res.status(200).end()
    })
})

module.exports = app;
