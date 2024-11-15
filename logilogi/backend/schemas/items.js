const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    "name":{
        type: String
    },
    "quantity":{
        type: Number
    },
    "typ":{
        type: String,
        require:true
    },
});

module.exports = mongoose.model('Items', itemsSchema)