var express = require('express');
const productsControllers = require('../controllers/productsControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', productsControllers.getAll);

router.get('/:id', productsControllers.getbyID );

router.post('/', productsControllers.create);

router.put('/:id', productsControllers.update);

router.delete('/:id', productsControllers.delete); 
module.exports = router;
