// import the connectetomongo module 

const connectToMongo =  require('./db')
const express = require('express')
const app = express()
const port = 3010
// calling the function 
connectToMongo();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})