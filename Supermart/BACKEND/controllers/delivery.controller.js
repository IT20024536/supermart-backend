const Bill = require("../models/bill.model");
const Item = require("../models/item.model");
const Delivery = require("../models/delivery.model");

class DeliveryController {

    getAllDelivery = async (req, res) => {
        try {
            let deliveries = await Delivery.find({});

            res.status(200).send({
                deliveries: deliveries,
                message: "All Available deliveries"
            })
        } catch (error) {
            res.status(500).send({
                message: "deliveries Cannot be get",
                error: error.message
            })
        }
    }

    create = async (req, res) => {
        try {
            const {billNumber, deliveryNumber, deliveryVanNumber, driverContactNumber, 
                state, customerName, customerContactNumber, customerAddress, deliveryCharge} = req.body;

            let bill = await Bill.findOne({id: billNumber});

            if(bill == null) {
                return res.status(404).send({
                    createdDelivery: null,
                    message: "No Bill Found"
                })
            }

            const newDelivery = new Delivery({
                billNumber, 
                deliveryNumber, 
                deliveryVanNumber, 
                driverContactNumber, 
                state, 
                customerName, 
                customerContactNumber, 
                customerAddress, 
                deliveryCharge
            })

            await newDelivery.save();

            res.status(201).send({
                createdDelivery: newDelivery,
                message: "created"
            })

        } catch (error) {
            res.status(500).send({
                message: "deliveries Cannot be get",
                error: error.message
            })
        }
    }

    getSingle = async (req, res) => {
        try {
            const id = req.params.id;

            let bill = await Bill.findOne({id: id});

            if(bill == null) {
                return res.status(200).send({
                    delivery: null,
                    message: "Please Enter a Valid Bill Number"
                })
            }

            let del = await Delivery.findOne({billNumber: id});

            if(del == null) {
                return res.status(200).send({
                    delivery: null,
                    message: "No Delivery Details For This Bill Number"
                })
            }

            res.status(200).send({
                delivery: del,
                message: "Found"
            })
        } catch (error) {
            res.status(500).send({
                message: "deliveries Cannot be get",
                error: error.message
            })
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            const state = req.body.state;

            let updated = await Delivery.updateOne({id: id}, {
                state: state
            })

            let updatedItem = await Delivery.findOne({
                id: id
            })

            res.status(200).send({
                delivery: updatedItem,
                message: "Updated"
            })
        } catch (error) {
            res.status(500).send({
                message: "delivery Cannot be updated",
                error: error.message
            })
        }
    }
}

module.exports = new DeliveryController();