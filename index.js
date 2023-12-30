const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
// require('dotenv').config()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// connect mongodb using mongoose
// user name:rasibul179
// pass:k6giboj3OLkiRYgU

mongoose.connect(`mongodb+srv://rasibul179:k6giboj3OLkiRYgU@food-client.4uhqxnh.mongodb.net/demo-food-client?retryWrites=true&w=majority`)
  .then(
    console.log("mongodb connected sucessfully")
  )
  .catch((error) => {
    console.log("error connecting tomongodb", error)
  })

// import route here

const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/carRoutes')
app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes)

app.get('/', (req, res) => {
  res.send('food is running')
})

app.listen(port, () => {
  console.log(`Food on port ${port}`)
})