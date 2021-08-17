var express = require('express');
var router = express.Router();
const productController = require("../controller/productController");


router.get('/getAll', productController.getAllProduct);
router.get('/get', productController.getProducts);
router.post('/get', productController.productById);
router.post('/update',productController.updateProductById);


module.exports = router;