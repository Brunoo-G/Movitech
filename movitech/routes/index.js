var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);

module.exports = router;
