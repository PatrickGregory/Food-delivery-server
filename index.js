const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const imageRoute = require('./routes/image');
const userRegister = require('./routes/userRegister');
const userSchema = require('./model/User')
const app = express();
dotenv.config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/v1/all',imageRoute)
app.use('/api/v1/user', userRegister);




const port = process.env.PORT || 8082

app.get('/all-users', async(req,res)=>{
    await userSchema.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
  })


// Connect to the MongoDB server
const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://patrickgregoryekene:3dBg9U1gg8munh5e@cluster0.4dv4a.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected',()=>{
    console.log('MongoDB connection is disconnected');
})

// Add a route handler for the root URL
app.get("/", (req, res) => {
    res.send("Welcome to the backend server!");
    });

app.listen(port, ()=>{
    connect()
    console.log(`Server is running on port ${port}`)
})