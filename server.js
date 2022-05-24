require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const method = require('method-override')
const Product = require('./models/Product')
const PORT = 3000

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => console.log('Connected to Mongo'))

// ===== Set Up Engine =====
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(method('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

// ===== Routes =====
// Index
app.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('Index', {shop: allProducts})
    })
})

// New
app.get('/products/new', (req, res) => res.render('New'))

// Delete
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if(!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if(!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
        console.log(req.body, 'body')
    })
})

// Edit
app.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if(!err) {
            res.render('Edit', {shop: foundProduct})
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if(!err) {
            res.render('Show', { shop: foundProduct })
        } else {
            res.status(400).json(err)
        }
    })
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))