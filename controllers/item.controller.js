const Item = require("../models/item.model");

class ItemController {

    createItem = async (req, res) => {
        try {
            const newItem = new Item({
                id: req.body.id,
                name: req.body.name,
                category: req.body.category,
                unitPrice: req.body.unitPrice,
                sellingPrice: req.body.sellingPrice,
                quantityIn: req.body.quantityIn,
                reorderLe: req.body.reorderLe
            })
        
            await newItem.save();
        
            res.status(201).send({
                newItem,
                message: "Item Created"
            })
        } catch (error) {
            res.status(500).send({
                message: "Item Not Created",
                error: error.message
            })
        }
    }

}

module.exports = new ItemController();