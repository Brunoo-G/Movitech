var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

/* GET user listing. */
router.get('/profile', controller.profile);

router.get('/profile/edit', controller.profileEdit);
router.post('/profile/edit', upload.single('fotoDePerfi'), controller.update);

router.get('/profile/:id', controller.showUser);

module.exports = router;
