var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  console.log(" Consultando el usuario "+req.params.id)
  res.send('Buscando un usuario por Id');
});

router.post('/:name', function(req, res, next) {
  console.log(" Creando el usuario : "+req.params.id)
  res.send('Agregando un usuario');
});

router.put('/:id', function(req, res, next) {
  console.log(" Actualizando el contacto : "+req.params.id)
  res.send('put users');
});

router.get('/login', function(req, res, next) {
  res.send('este es un login');
});
module.exports = router;
