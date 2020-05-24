const express = require('express');
const router = express.Router();
const AutoresController = require('../controllers/AutoresController');

const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './server/upload/autores' });

router.get('/',  AutoresController.getAutores);

router.get('/:id', AutoresController.getAutor);

router.post('/crear/',  AutoresController.postAutor);

router.delete('/:id', AutoresController.deleteAutor);

router.put('/:id', AutoresController.putAutor);

router.get('/search/:search', AutoresController.search);

router.post('/upload-image/:id?', md_upload, AutoresController.upload);

router.get('/get-image/:image', AutoresController.getImage);

module.exports = router;
