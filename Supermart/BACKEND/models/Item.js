const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    ProductID: {
        type : String,
        required : true
    },

    ItemName : {
        type : String,
        required : true
    },
    Category : {
        type : String,
        required : true
    },
    UnitPrice : {
        type : String,
        required : true
    },
    SellingPrice : {
        type : String,
        required : true
    },
    Quantity: {
        type : String,
        required : true
    },
    ReorderLevel: {
        type : String,
        required : true
    },
    TotalAmount: {
        type : String,
        required : true
    },

})
const Item = mongoose.model("Item",itemSchema);

module.exports = Item;