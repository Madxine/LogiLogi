const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    "name":{
        type: String
    },
    "quantity":{
        type: Number
    },
});

module.exports = mongoose.model('Items', itemsSchema)