var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')


router.get('/me', controller.profile) ;

router.get('/me/edit', controller.profile) ;

module.exports = router;
