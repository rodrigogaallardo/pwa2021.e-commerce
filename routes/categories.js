var express = require('express');
const categoriesControllers = require('../controllers/categoriesControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', categoriesControllers.getAll);

router.post('/', categoriesControllers.create);

module.exports = router;
