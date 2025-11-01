const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000
// middleware
app.use(cors())
app.use(express.json())

// const uri = "mongodb+srv://smartDBUser:CflXlNHEa1mIrCN5@cluster0.x08ux7h.mongodb.net/?appName=Cluster0";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x08ux7h.mongodb.net/?appName=Cluster0"`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});




app.get('/', (req, res) => {
  res.send('Smart server is running!')
})

async function run() {
  try {
    
    await client.connect();
   
    const db = client.db('smart_db')
    const productCollection = db.collection('products')
    const bidsCollection = db.collection('bids')
    const usersCollection = db.collection('users')
    //  user
    app.post('/users',async(req,res)=>{
        const newUser = req.body
        const email = req.body.email
        const query = {email:email}
        const existinguser = await usersCollection.findOne(query)
        if (existinguser) {
            res.send({message:'user already existed, do not nedd to add'})
        }
        else{
           const result = await usersCollection.insertOne(newUser)
        res.send(result)
        }
        

    })

    // products
    app.get('/products',async(req,res)=>{
        // const projectField = {title:1,price_min:1,price_max:1,image:1}
        // const cursor = productCollection.find().sort({price_min:1}).skip(2).limit(10).project(projectField)
         const email = req.query.email
        const query={}
        if (email) {
            query.email=email
        }
         const cursor = productCollection.find(query)
        const result = await cursor.toArray()
        res.send(result)
    })

   
    // latest product
    app.get('/latest-products',async(req,res)=>{
        const cursor = productCollection.find().sort({created_at:-1}).limit(6)
        const result = await cursor.toArray()
        res.send(result)
    })
      app.get('/products/:id',async(req,res)=>{
        const id = req.params.id
         if (!ObjectId.isValid(id)) {
    return res.status(400).send({ error: "Invalid product ID" });
  }
        const query = {_id: id}
       

        const result = await productCollection.findOne(query)
          if (!result) {
    return res.status(404).send({ error: "Product not found" });
  }
        res.send(result)
    })

    app.post('/products',async(req,res)=>{
        const newProduct =  req.body
        const result= await productCollection.insertOne(newProduct)
        res.send(result)
    })

    app.patch('/products/:id',async(req,res)=>{
        const id = req.params.id
        const updatedProduct = req.body
        const query = {_id: new ObjectId(id)}
        const update ={
            $set:{
                product:updatedProduct.product,
                price:updatedProduct.price
            }
        }
        const result = await productCollection.updateOne(query,update)
        res.send(result)
        
    })
    app.delete('/products/:id',async(req,res)=>{
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await productCollection.deleteOne(query)
        res.send(result)
    })
    
//   bids releted api
    
    app.get('/bids',async(req,res)=>{
        const email = req.query.email
        const query={}
        if (email) {
            query.buyer_email=email
        }
         const cursor = bidsCollection.find(query)
        const result = await cursor.toArray()
        res.send(result)
    })

     app.get('/products/bids/:productId',async(req,res)=>{
     const productId=req.params.productId
     const query={product:productId}
     const cursor =  bidsCollection.find(query).sort({bid_price: 1})
     const result = await cursor.toArray()
        res.send(result)
    })
    app.get('/bids',async(req,res)=>{
        const query ={}
        if (query.email) {
            query.buyer_email=email
        }
        const cursor = bidsCollection.find()
        const result = await cursor.toArray(query)
        res.send(result)
    })

     app.post('/bids',async(req,res)=>{
        const newBid =  req.body
        const result= await bidsCollection.insertOne(newBid)
        res.send(result)
    })
    app.delete('/bids/:id',async(req,res)=>{
        const id = req.params.id
        const query = {_id : new ObjectId(id)}
        const result = await bidsCollection.deleteOne(query)
        res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
    
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// CflXlNHEa1mIrCN5