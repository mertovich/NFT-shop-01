const mongoose = require('mongoose')

var productSchema = mongoose.Schema({
    url:String,
    name:String,
    description:String,
    artiste:String,
    price:Number,
    belonging:String,
})

var Product = mongoose.model('Product',productSchema)

module.exports = Product