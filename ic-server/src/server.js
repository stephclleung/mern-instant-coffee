const mongoose = require('mongoose');
const express = require('express');

const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') {
    const results = require('dotenv').config();
    console.log("In Dev mode, results : ", results)
}

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {useNewUrlParser : true}, (err) => {
    if(err) {
        console.log("Mongo connection error, ", err);
    } else {
        console.log("Successfully connected to database")
    }
})

const app = express();
const router = express.Router();





app.listen(PORT, () => {
    console.log("Backend up at Port 3001")
})