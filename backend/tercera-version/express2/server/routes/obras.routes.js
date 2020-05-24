const exprees = require('express');
const router = exprees.Router();

//se requiere el controlador para poder acceder a todos sus métodos desde aquí
const ObrasController = require('../controllers/Obras.controller');

//multipart

router.get('/', ObrasController.getObras);
router.post('/crear', ObrasController.createObra);
router.get('/:id', ObrasController.getObra);
router.put('/:id', ObrasController.editObra);
router.delete('/:id', ObrasController.deleteObra);
router.get('/search/:search', ObrasController.search);
router.post('/upload-image/:file_name', ObrasController.upload);

module.exports = router;