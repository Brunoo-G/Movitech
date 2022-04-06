var express = require('express');
const controller = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Bienvenido a productos!');
});

router.get('/agregarProducto', function(req, res, next) {
    res.send('Agrega tu producto!');
});

router.get('/detalleProducto', function(req, res, next) {
  res.send('Este es el detalle de producto!');
});

//router.get('/detalleProducto/color/:color', controller.color);
//router.get('/detalleProducto/:id', controller);

module.exports = router;