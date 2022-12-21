// import the connectetomongo module 

const connectToMongo =  require('./db')
const express = require('express')
const app = express()
const port = 3006

// calling the function 
connectToMongo();


// if we want to use req content then use this middleware
app.use(express.json())


// available routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

