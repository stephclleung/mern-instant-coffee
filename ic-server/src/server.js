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
    const connectionResult = err ? err : "Successfully connected to database";
    console.log(connectionResult);
});

const app = express();
app.user(bodyParser.urlencoded({extended: false}));
appuse(bodyParser.json());
const router = express.Router();


router.get('/', (req, res) {
    res.send({ message : "got it"});
})


app.listen(PORT, () => {
    console.log("Backend up at Port 3001")
})