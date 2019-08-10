const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();

const pseudoCoffee = require('../data/fake-data');

router.get('/', async (req, res) => {
    res.send({ message : pseudoCoffee});
});

router.post('/', async (req, res) => {
    try {
        const instantCoffee = await new Coffee(req.body).save();
        //TODO: Check duplicates.
        console.log(instantCoffee)
        res.send(instantCoffee);
    } catch (error) {
        console.log("Server error |", error);
        res.send({});
    }
})

module.exports = router;