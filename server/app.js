const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const cors = require('cors');

const app=express();

const corsOptions = {
    origin: 'http://localhost:5173', // frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome')
})
app.use('/products',router)

mongoose.connect('mongodb://0.0.0.0:27017/Ecomm')
.then(()=>console.log("db ok"))
.catch(()=>console.log("err"))

app.listen(5000,()=>{
    console.log("server is listening on 5000");
})