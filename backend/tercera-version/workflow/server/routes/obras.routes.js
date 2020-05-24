const express = require('express');
const router = express.Router();
const ObrasController = require('../controllers/ObrasController');

const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './server/upload/obras' });

router.get('/', ObrasController.getObras);
router.post('/crear/', ObrasController.postObra);
router.get('/:id', ObrasController.getObra);
router.put('/:id', ObrasController.putObra);
router.delete('/:id', ObrasController.deleteObra);
router.post('/upload-image/:id?', md_upload, ObrasController.upload);
router.get('/get-image/:image', ObrasController.getImage);


module.exports = router;