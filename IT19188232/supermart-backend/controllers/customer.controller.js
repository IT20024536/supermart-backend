const Customer = require("../models/customer.model");

class CustomerController {

    createCustomer = async (req, res) => {
        try {
            const newCustomer = new Customer({
                
                name: req.body.name,
                phone: req.body.phone,
                age: req.body.age,
                
            })
        
            await newCustomer.save();
        
            res.status(201).send({
                newCustomer,
                message: "Customer Created"
            })
        } catch (error) {
            res.status(500).send({
                message: "Customer Not Created",
                error: error.message
            })
        }
    }

}

module.exports = new CustomerController();