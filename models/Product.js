const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    desc: String,
    image: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product