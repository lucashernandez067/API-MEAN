const express = require('express');
const router = express.Router();
const AutoresController = require('../controllers/AutoresController');

router.get('/', AutoresController.getAutores);
router.post('/', AutoresController.createAutor);
router.get('/:id', AutoresController.getAutor);
router.put('/:id', AutoresController.editAutor);
router.delete('/:id', AutoresController.deleteAutor);

module.exports = router;