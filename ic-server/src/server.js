const mongoose = require('mongoose');
const express = require('express');

const bodyParser = require('body-parser');
const PORT = 3001;

const app = express();
const router = express.Router();

app.listen(PORT, () => {
    console.log("Backend up at Port 3001")
})