const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();

router.get('/', async (req, res) => {
    res.send({ message : "Coffee router is up."});
});

router.post('/', async (req, res) => {
    res.send({ message : "Post request recv'd"});
})

module.exports = router;