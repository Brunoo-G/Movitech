var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

/* GET home page. */
router.get('/', controller.index);

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);
router.post('/register', upload.single('fotoDePerfi'), controller.store);

router.get('/search-results', controller.search);

module.exports = router;
