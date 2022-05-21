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

// New

// Delete

// Update

// Create

// Edit

// Show