var express = require('express');
const controller = require('../controllers/productController');
var router = express.Router();
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

/* GET product listing. */
router.get('/', controller.index);

router.get('/agregarProducto', controller.productAdd);
router.post('/agregarProducto', upload.single('imagenDeProducto'), controller.store);

router.get('/:id', controller.productDetail);

module.exports = router;
