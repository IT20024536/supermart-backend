const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('customers', Customer);