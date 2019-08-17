const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

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
app.use(express.static(path.join(__dirname, "ic-client", "build")));

const coffeeRouter = require('./routers/instant-coffee');
app.use('/coffee', coffeeRouter)


app.get('/', (req, res) => {
    res.send({ message: "got it" });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "ic-client", "build", "index.html"));
})

app.listen(PORT, () => {
    console.log("Backend up at Port 3001")
});