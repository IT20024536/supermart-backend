const express = require("express");
const router = express.Router();

const deliveryController = require('../controllers/delivery.controller');

router.post('/create', deliveryController.create);

router.get('/getAll', deliveryController.getAllDelivery);

router.get('/get/:id', deliveryController.getSingle);

router.patch('/update/:id', deliveryController.update);

module.exports = router;