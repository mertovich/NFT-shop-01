require('dotenv').config();
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const Product = require('./ProductModel')
const mongoose = require('mongoose')
const checkJwt = require('./Auth')
const jwt = require('jsonwebtoken');
const User = require('./UserModel');


mongoose.connect(process.env.MONGO_URL, (err) => {
    if (!err) {
        console.log('db active')
    }
})

var urlEncodedParser = bodyParser.urlencoded()

const app = express();
app.use(morgan('combined'))
app.use(cors());
app.use(helmet());
app.use(express.json());

app.post('/productlist', urlEncodedParser, (req, res, next) => {
    let tmp = new Product({
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        artiste: req.body.artiste,
        price: req.body.price,
        belonging: req.body.belonging
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

app.post('/register', urlEncodedParser, async (req, res) => {
    let user;
    let tmp = User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        balance: 0
    })
    await tmp.save((err) => {
        if (err) {
            throw err
        }
    })

    User.find({ email: req.body.email, password: req.body.password }, (err, data) => {
        if (err) {
            throw err
        }
        let token = jwt.sign({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            expiresIn: '7d'
        }, process.env.TOKEN_SECRET)

        res.json({
            token: token,
            login: 'true',
            id: data[0]._id,
            name: data[0].name,
            lastName: data[0].lastName,
            email: data[0].email,
            password: data[0].password,
            balance: data[0].balance,
        })
        res.status(200).end()
    })
})

app.post('/login', urlEncodedParser, (req, res, next) => {
    User.find({ email: req.body.email, password: req.body.password }, (err, data) => {
        if (err) {
            throw err
        }
        let userInfo = data[0]
        try {
            if (userInfo.email === req.body.email && userInfo.password === req.body.password) {
                let token = jwt.sign({
                    name: userInfo.name,
                    lastName: userInfo.lastName,
                    email: userInfo.email,
                    password: userInfo.password,
                    expiresIn: '7d',
                }, process.env.TOKEN_SECRET)
                res.json({
                    token: token,
                    login: 'true',
                    id: userInfo._id,
                    name: userInfo.name,
                    lastName: userInfo.lastName,
                    email: userInfo.email,
                    password: userInfo.password,
                    balance: userInfo.balance,
                })
                res.status(200).end
            }
        } catch (error) {
            res.status(404).end
        }
    })
})

app.post('/balance', checkJwt, urlEncodedParser, (req, res) => {
    User.findById(req.body.id, (err, data) => {
        if (err) {
            throw err
        }
        data.balance = (parseInt(data.balance) + parseInt(req.body.number))
        data.save((err) => {
            if (err) {
                throw err
                res.status(500).end()
            }
        })
    })
    User.findById(req.body.id, (err, data) => {
        if (err) {
            throw err
        }
        let userInfo = data
        try {
            let token = jwt.sign({
                name: userInfo.name,
                lastName: userInfo.lastName,
                email: userInfo.email,
                password: userInfo.password,
                balance: userInfo.balance,
                expiresIn: '7d',
            }, process.env.TOKEN_SECRET)
            res.json({
                token: token,
                login: 'true',
                id: userInfo._id,
                name: userInfo.name,
                lastName: userInfo.lastName,
                email: userInfo.email,
                password: userInfo.password,
                balance: userInfo.balance,
            })
            res.status(200).end
        } catch (error) {
            res.status(404).end
        }
    })
})

app.post('/productupdate',checkJwt,urlEncodedParser,(req,res)=>{
    Product.findById(req.body.id,(err,data)=>{
        if (err) {
            throw err
            res.status(500).end()
        }
        data.price = parseInt(req.body.number)
        data.save((err)=>{
            if (err) {
                throw err
                res.status(404).end()
            }
            res.status(200).end()
        })
    })
})

module.exports = app;
