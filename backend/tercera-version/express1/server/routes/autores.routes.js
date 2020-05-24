const exprees = require('express');
const router = exprees.Router();

//se requiere el controlador para poder acceder a todos sus métodos desde aquí
const AutoresController = require('../controllers/Autores.controller');

//subida de archivos
/*
const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './server/upload/autores' });
*/

router.get('/', AutoresController.getAutores);
router.post('/crear', AutoresController.createAutor);
router.get('/:id', AutoresController.getAutor);
router.put('/:id', AutoresController.editAutor);
router.delete('/:id', AutoresController.deleteAutor);
router.get('/search/:search', AutoresController.search);
router.post('/upload-image/:file_name', AutoresController.upload);

module.exports = router;