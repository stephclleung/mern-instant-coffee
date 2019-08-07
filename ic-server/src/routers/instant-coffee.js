const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();

router.get('/', async (req, res) => {
    console.log("Coffee router is up.");
});

module.exports = router;