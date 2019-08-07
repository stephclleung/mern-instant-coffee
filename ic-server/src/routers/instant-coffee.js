const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();

const pseudoCoffee = require('../data/fake-data');

router.get('/', async (req, res) => {
    res.send({ message : pseudoCoffee});
});

router.post('/', async (req, res) => {
    res.send({ message : "Post request recv'd"});
})

module.exports = router;