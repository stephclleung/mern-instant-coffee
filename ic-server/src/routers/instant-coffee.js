const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();
const { uploadImage } = require('../image-upload/image-upload');
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
        res.status(204).send(instantCoffee);

    } catch (error) {
        console.log("SERVER: error occured at GET /coffee/:id | ", error);
        res.status(400).send();
    }
})

router.post('/', async (req, res) => {
    try {
        const exists = await Coffee.findOne({ coffeeName: req.body.coffeeName });
        if (exists) {
            return res.status(409).send({ error: "This coffee is already registered." })
        }
        const instantCoffee = await new Coffee(req.body).save();
        res.status(201).send(instantCoffee);
    } catch (error) {
        console.log("SERVER: error occured at POST /coffee/ ||", error);
        res.send({ error: 'An error has occured. Please try again later.' });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const exists = await Coffee.findOne({ coffeeName: req.body.coffeeName });
        if (exists) {
            return res.status(409).send({ error: "This coffee is already registered." })
        }
        const instantCoffee = await Coffee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).send(instantCoffee);


    } catch (error) {
        console.log('SERVER: error occured at POST /coffee/:id | ', error);
        res.status(400).send({ error: 'Coffee not found.' });
    }

})

router.delete('/', (req, res) => {
    res.status(405).set("Allow", "GET, POST").send({ error: "Please specify Member ID to delete" });
});

router.post('/:id', (req, res) => {
    res.status(405).set("Allow", "DELETE, PATCH").send({ error: "Method not allowed" });
});

router.patch('/', (req, res) => {
    res.status(405).set("Allow", "GET, POST").send({ message: "Please specify Member ID to modify" });
})


module.exports = router;