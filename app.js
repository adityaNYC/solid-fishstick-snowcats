const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
  res.send('An Enneagram 6 is called The Loyalist. They are fun, energetic, dependable, and honest at their best. In times of disintegration, they can become anxious and self-doubting, indecisive, and overly dependent on fail safes rather than their instincts or judgment.')
})

//app.listen(3000)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
