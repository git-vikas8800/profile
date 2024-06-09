const express = require('express')
const app = express()
var cors = require('cors');
const bodyParser = require('body-parser')
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/",(req,res) =>{
  console.log(req.form)
  res.send("form data recived")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})