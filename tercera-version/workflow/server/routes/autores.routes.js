const express = require('express');
const router = express.Router();
const AutoesController = require('../controllers/AutoresController');

router.get('/',  AutoesController.getAutores);

router.get('/:id', AutoesController.getAutor);

router.post('/',  AutoesController.postAutor);

router.delete('/:id', AutoesController.deleteAutor);

router.put('/:id', AutoesController.putAutor);

module.exports = router;
