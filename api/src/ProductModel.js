const mongoose = require('mongoose')

var productSchema = mongoose.Schema({
    url:String,
    name:String,
    description:String,
    artiste:String,
    price:Number,
})

var Product = mongoose.model('Product',productSchema)

module.exports = Product