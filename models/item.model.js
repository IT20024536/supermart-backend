const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    quantityIn: {
        type: Number,
        required: true
    },
    reorderLe: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('items', Item);