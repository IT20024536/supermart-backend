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
                createdItem: newItem,
                message: "Item Created"
            })
        } catch (error) {
            res.status(500).send({
                message: "Item Not Created",
                error: error.message
            })
        }
    }

    getAllItems = async (req, res) => {
        try {
            let items = await Item.find({});

            res.status(200).send({
                items: items,
                message: "All items"
            })
        } catch (error) {
            res.status(500).send({
                message: "Item Not Cannot be get",
                error: error.message
            })
        }
    }

    getAllAvailableItems = async (req, res) => {
        try {
            let items = await Item.find({});


            res.status(200).send({
                items: items.filter(i => i.quantityIn > 0),
                message: "All Available items"
            })
        } catch (error) {
            res.status(500).send({
                message: "Item Not Cannot be get",
                error: error.message
            })
        }
    }
}

module.exports = new ItemController();