const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const router = require('./routes/todoRoute');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log('Mongodb connected...!'))
    .catch(err=>console.log(err))

    app.use(router);



    
app.listen(PORT, ()=>{
    console.log(`Listening on: ${PORT}`);
});

