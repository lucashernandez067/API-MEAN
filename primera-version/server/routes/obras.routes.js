const exprees = require('express');
const router = exprees.Router();

//se requiere el controlador para poder acceder a todos sus métodos desde aquí
const ObrasController = require('../controllers/Obras.controller');

router.get('/', ObrasController.getObras);
router.post('/', ObrasController.createObra);
router.get('/:id', ObrasController.getObra);
router.put('/:id', ObrasController.editObra);
router.delete('/:id', ObrasController.deleteObra);

module.exports = router;