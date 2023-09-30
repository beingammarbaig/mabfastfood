const express = require('express')
const cors = require("cors");
const app = express()
const port = 5000
const connectToMongoDB = require("./db")
connectToMongoDB()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());
app.use(express.json());
app.use('/menu', require('./displaydata'));
app.use('/add', require('./addFood'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})