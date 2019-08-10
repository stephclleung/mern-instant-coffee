const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();

const pseudoCoffee = require('../data/fake-data');

router.get('/', async (req, res) => {
    res.send({ message : pseudoCoffee});
});

router.post('/', async (req, res) => {
    console.log("Server: recv'd something : ", req.body);
    const data = req.body;
    data.id = "123456ABC";
    res.send(data);
})

module.exports = router;