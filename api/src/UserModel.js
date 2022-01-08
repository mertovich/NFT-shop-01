const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name:String,
    lastName:String,
    email:String,
    password:String,
    balance:Number,
})

var User = mongoose.model('User',userSchema)

module.exports = User