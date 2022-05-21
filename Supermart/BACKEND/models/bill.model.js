const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    contactNumber: {
        type: String,
        required: true,
        maxlength: 10
    },
    billItems: {
        type: [],
        required: true
    },
    fullAmount: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number
    },
    discountedAmount: {
        type: Number
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('bills', Bill);