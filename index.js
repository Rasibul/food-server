const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// user name:food-cluster
// pass:5KegV4CmqJHOAIo9




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://food-cluster:5KegV4CmqJHOAIo9@cluster0.xmelfag.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // create a collection

    const menuCollection = client.db("food-client").collection("menus")
    const cartsCollection = client.db("food-client").collection("cartItems")

    app.get('/menu',async(req,res)=>{
      const result = await menuCollection.find().toArray()
      res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('food is running')
})

app.listen(port, () => {
  console.log(`Food on port ${port}`)
})