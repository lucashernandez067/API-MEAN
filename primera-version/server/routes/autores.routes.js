const exprees = require('express');
const router = exprees.Router();

//se requiere el controlador para poder acceder a todos sus métodos desde aquí
const AutoresController = require('../controllers/Autores.controller');

router.get('/', AutoresController.getAutores);
router.post('/', AutoresController.createAutor);
router.get('/:id', AutoresController.getAutor);
router.put('/:id', AutoresController.editAutor);
router.delete('/:id', AutoresController.deleteAutor);

module.exports = router;