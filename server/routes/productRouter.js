var express = require('express');
var router = express.Router();
const productController = require("../controller/productController");


router.get('/getAll', productController.getAllProduct);


module.exports = router;