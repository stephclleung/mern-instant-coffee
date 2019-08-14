const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();

//TODO:
// - Find repeating coffees, reject if found (POST/coffee)
// - Seal off all incorrect requests

router.get('/', async (req, res) => {
    try {
        const instantCoffees = await Coffee.find({});
        res.send(instantCoffees);
    } catch (error) {
        console.log("SERVER: error occured at GET/coffee | ", error);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const instantCoffee = await Coffee.findById(req.params.id);
        instantCoffee ? res.status(200).send(instantCoffee) : res.status(404).send();
    } catch (error) {
        console.log("SERVER: error occured at GET /coffee/:id | ", error);
        req.status(400).send();
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const instantCoffee = await Coffee.findOneAndDelete({ _id: req.params.id });
        console.log("Server : ", instantCoffee)
        res.status(204).send(instantCoffee);

    } catch (error) {
        console.log("SERVER: error occured at GET /coffee/:id | ", error);
        res.status(400).send();
    }
})

router.post('/', async (req, res) => {
    try {
        const instantCoffee = await new Coffee(req.body).save();
        //TODO: Check duplicates.
        res.status(201).send(instantCoffee);
    } catch (error) {
        console.log("SERVER: error occured at POST /coffee/ ||", error);
        res.send({ error: 'An error has occured. Please try again later.' });
    }
})

router.patch('/:id', async (req, res) => {
    // for editing...
    try {
        const instantCoffee = await Coffee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).send(instantCoffee);

    } catch (error) {
        console.log('SERVER: error occured at POST /coffee/:id | ', error);
        res.status(400).send({ error: 'Coffee not found.' });
    }

})

module.exports = router;