var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController');


/* GET product listing. */

router.get('/', searchController.index);
// router.get('/search-results', indexController.search);

module.exports = router;