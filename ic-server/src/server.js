const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') {
    const results = require('dotenv').config();
    console.log("In Dev mode, results : ", results)
}

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    const connectionResult = err ? err : "Successfully connected to database";
    console.log(connectionResult);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const coffeeRouter = require('./routers/instant-coffee');
app.use('/coffee', coffeeRouter)


app.get('/', (req, res) => {
    res.send({ message: "got it" });
});


app.listen(PORT, () => {
    console.log("Backend up at Port 3001")
});