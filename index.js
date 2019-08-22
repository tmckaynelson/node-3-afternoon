const result = require('dotenv').config()

if (result.error) throw result.error

const express = require('express')
const cors = require('cors')
const massive = require('massive')

// controllers
const productCtrl = require('./products_controller')

const { CONNECTION_STRING } = process.env

// app setup
const app = express()

// TLMs
app.use(express.json())
app.use(cors())

// connect db
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db connected')
})
.catch(error => {
    console.log(error)
})

// endpoints
app.get('/api/products', productCtrl.getAll)

app.get('/api/products/:id', productCtrl.getOne)

app.put('/api/products/:id', productCtrl.update)

app.post('/api/products', productCtrl.create)

app.delete('/api/products/:id', productCtrl.deleteProduct)

app.listen(3000, () => {
    console.log('server running on port 3000')

})