const express = require('express')
const app = express()
const port = 3000
const db = require('../database/db_config.js')
app.use(express.json({urlencoded: true}));
app.use(express.static('./dist'))


app.get('/product/reviews/recent', db.recent)

app.get('/product/reviews/helpful', db.helpful)

// app.post('/product/reviews', (req, res) => {

// })

app.listen(port, () => { console.log('Clean up on aisle ', port) })