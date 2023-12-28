const express = require('express')
const app = express()
const port = 92
const path = require("path")

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'views') 
app.use("/static",express.static('static'))

app.get('/', (req, res) => {
  res.status(200).render('index.pug')
})
app.post('/', (req, res) => {
  res.status(200).render('shopping.pug')
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})