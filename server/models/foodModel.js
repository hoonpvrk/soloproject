const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    foodCuisine: {type: String, required: true },
    foodName: {type: String, required: true },
});

const Food = mongoose.model('food', foodSchema)

module.exports = Food;
