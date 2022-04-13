const express = require("express");
const router = express.Router();

const billController = require('../controllers/bill.controller')

router.post('/create', billController.createBill);

router.get('/getAll', billController.getAllBills);

router.get('/get/:id', billController.getSingleBill);

module.exports = router;