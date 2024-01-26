const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello from the express')
})

app.listen(3000)