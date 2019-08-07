const mongoose = require('mongoose');

const instantCoffeeSchema = new mongoose.Schema({
    coffeeName: {
        type: String,
        trim: true
    },
    packageSize: {
        type: Number,
    },
    containerSize : {
        type: Number,
    },
    price: {
        type: Number
    },
    acidity: {
        type: Number
    },
    aroma : {
        type: Number
    },
    totalPurchased:{
        type: Number,
        default: 0
    }
});

const Coffee = mongoose.model('Coffee', instantCoffeeSchema);
module.exports = Coffee;