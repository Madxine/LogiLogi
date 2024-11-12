const express = require('express');

const {
    createItems,
    getAllItems,
    getOneItems,
    updateItems,
    deleteOneItems,
} = require('../controllers/items');

const api = express.Router();

api.route('/').get(getAllItems).post(createItems);
api.route('/:id').get(getOneItems).put(updateItems).delete(deleteOneItems);

module.exports = api