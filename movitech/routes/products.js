var express = require('express');
const controller = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/', controller.index);
router.get('/agregarProducto', controller.productAdd);
router.get('/:id', controller.productDetail);


module.exports = router;
