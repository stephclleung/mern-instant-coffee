const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();

const pseudoCoffee = require('../data/fake-data');

router.get('/', async (req, res) => {
    res.send({ data: pseudoCoffee });
});

router.get('/:id', async (req, res) => {
    try {
        const instantCoffee = await Coffee.findById(req.params.id);
        res.send(instantCoffee);
    } catch (error) {
        console.log("SERVER: error occured at GET /coffee/:id | ", error);
    }

})

router.post('/', async (req, res) => {
    try {
        const instantCoffee = await new Coffee(req.body).save();
        //TODO: Check duplicates.
        res.send(instantCoffee);
    } catch (error) {
        console.log("SERVER: error occured at POST /coffee/ ||", error);
        res.send({});
    }
})

module.exports = router;