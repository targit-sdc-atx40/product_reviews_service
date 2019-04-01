const express = require('express')
const app = express()
const port = 3000
app.use(express.json({urlencoded: true}));
app.use(express.static('./dist'))

app.get('/product/reviews', (req, res) => {
  res.send('suhhhh dude')
})

app.post('/product/reviews', (req, res) => {
  
})

app.listen(port, () => { console.log('Clean up on aisle ', port) })