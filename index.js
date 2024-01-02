const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const port = process.env.PORT || 5000

// console.log(process.env.ACCESS_TOKEN_SECRET)

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

// jwt authentication

app.post('/jwt', async (req, res) => {
  const user = req.body
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1hr'
  })
  res.send({ token })
})



// import route here

const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/carRoutes')
const userRoutes = require('./api/routes/useRoutes')
app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes)
app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send('food is running')
})

app.listen(port, () => {
  console.log(`Food on port ${port}`)
})