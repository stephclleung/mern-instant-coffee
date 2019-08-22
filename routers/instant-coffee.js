const Coffee = require('../models/instant-coffee');
const express = require('express');
const router = new express.Router();
const { uploadImage } = require('../image-upload/image-upload');
const multer = require('multer');
const upload = multer({ dest: './uploads/' })
//TODO:
// - Find repeating coffees, reject if found (POST/coffee)
// - Seal off all incorrect requests

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     }
// })

// const upload = multer({ storage });
// const path = require('path');
// router.use(express.static(path.join(__dirname)));

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

router.post('/', upload.single('imageCoffee'), async (req, res) => {
    try {
        console.log("POST : ", req.body)
        console.log("Image: ", req.file);
        const exists = await Coffee.findOne({ coffeeName: req.body.coffeeName });
        if (exists) {
            return res.status(409).send({ error: "This coffee is already registered." })
        }
        const instantCoffee = await new Coffee(req.body).save();
        res.status(201).send(instantCoffee);
    } catch (error) {
        console.log("SERVER: error occured at POST /coffee/ ||", error);
        res.status(400).send({ error: 'An error has occured. Please try again later.' });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const exists = await Coffee.findOne({ coffeeName: req.body.coffeeName });
        if (exists) {
            return res.status(409).send({ error: "This coffee is already registered." })
        }
        const instantCoffee = await Coffee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        console.log('Patch', instantCoffee)
        if (!instantCoffee) {
            throw new Error()
        }
        res.status(200).send(instantCoffee);

    } catch (error) {
        console.log('SERVER: error occured at POST /coffee/:id | ', error);
        return res.status(404).send({ error: 'Coffee not found.' });
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