const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Delivery = new Schema({
    billNumber: {
        type: Number,
        required: true,
        unique: true
    },
    deliveryNumber: {
        type: Number,
        required: true,
        unique: true
    },
    deliveryVanNumber: {
        type: String,
        required: true
    },
    driverContactNumber: {
        type: String,
        required: true
    },
    state: {
        type: [],
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerContactNumber: {
        type: String,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    deliveryCharge: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('delivery', Delivery);