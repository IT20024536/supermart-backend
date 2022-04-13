const Bill = require("../models/bill.model");
const Item = require("../models/item.model");

class BillController {

    createBill = async (req, res) => {
        try {

            let items = req.body.billItems;

            for (let i = 0; i < items.length; i++) {
                let it = await Item.findOne({id: items[i].id});
                it.quantityIn = it.quantityIn - items[i].quantity;

                await Item.updateOne({id: items[i].id}, {
                    quantityIn: it.quantityIn - items[i].quantity
                });
            }

            const newBill = new Bill({
                id: req.body.id,
                contactNumber: req.body.contactNumber,
                billItems: req.body.billItems,
                fullAmount: req.body.fullAmount,
                discountPercentage: req.body.discountPercentage,
                discountedAmount: req.body.discountedAmount
            })

            await newBill.save();

            res.status(201).send({
                createdBill: newBill,
                message: "Bill Created"
            })

        } catch (error) {
            res.status(500).send({
                message: "Bills Cannot be created",
                error: error.message
            })
        }
    }
    
    getAllBills = async (req, res) => {
        try {
            let bills = await Bill.find({});

            res.status(200).send({
                bills: bills,
                message: "All Available bills"
            })
        } catch (error) {
            res.status(500).send({
                message: "Bills Cannot be get",
                error: error.message
            })
        }
    }

    getSingleBill = async (req, res) => {
        try {
            let id = req.params.id;

            let bill = await Bill.findOne({id: id});

            res.status(200).send({
                bill: bill,
                message: "Found"
            })
        } catch (error) {
            res.status(500).send({
                message: "Bill Cannot be get",
                error: error.message
            })
        }
    }

}

module.exports = new BillController();