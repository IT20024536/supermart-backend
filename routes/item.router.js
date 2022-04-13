const express = require("express");
const router = express.Router();

const itemController = require('../controllers/item.controller')

router.post('/create', itemController.createItem);

router.get('/getAll', itemController.getAllItems);

router.get('/getAvail', itemController.getAllAvailableItems);

module.exports = router;