const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    desc: String,
    image: String,
    inStock: Boolean
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product