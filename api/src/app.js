require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const Product = require('./ProductModel')
const mongoose = require('mongoose')
const checkJwt = require('./Auth')
const jwt = require('jsonwebtoken');
const User = require('./UserModel')

mongoose.connect(process.env.MONGO_URL, (err) => {
    if (!err) {
        console.log('db active')
    }
})

var urlEncodedParser = bodyParser.urlencoded()

const app = express();
app.use(cors());
app.use(express.json());

app.post('/productlist', urlEncodedParser, (req, res, next) => {
    let tmp = new Product({
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        artiste: req.body.artiste,
        price: req.body.price
    })
    tmp.save((err) => {
        if (err) {
            throw err
        }
        res.status(200).end()
    })
})

app.get('/productlist', urlEncodedParser, (req, res) => {
    Product.find({}, (err, data) => {
        if (err) {
            throw err
        }
        res.send(data)
        res.status(200).end()
    })
})

app.post('/register',urlEncodedParser, (req, res) => {
    let user;
    let tmp = User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    tmp.save((err)=>{
        if (err) {
            throw err
        }
    })
    let token = jwt.sign({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        expiresIn: '7d'
    },process.env.TOKEN_SECRET)
    res.json({
        token:token,
        login:'true',
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    })
    res.status(200).end()
})

module.exports = app;
