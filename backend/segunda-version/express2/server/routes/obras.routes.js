const exprees = require('express');
const router = exprees.Router();

//se requiere el controlador para poder acceder a todos sus métodos desde aquí
const ObrasController = require('../controllers/Obras.controller');

//multipart
const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './server/upload/obras' });

router.get('/', ObrasController.getObras);
router.post('/crear', ObrasController.createObra);
router.get('/:id', ObrasController.getObra);
router.put('/:id', ObrasController.editObra);
router.delete('/:id', ObrasController.deleteObra);
router.get('/search/:search', ObrasController.search);
router.post('/upload-image/:id?', md_upload, ObrasController.upload);
router.get('/get-image/:image', ObrasController.getImage);

module.exports = router;