const express = require('express');
const router = express.Router();
const ObrasController = require('../controllers/ObrasController');

router.get('/', ObrasController.getObras);
router.post('/', ObrasController.createObra);
router.get('/:id', ObrasController.getObra);
router.put('/:id', ObrasController.editObra);
router.delete('/:id', ObrasController.deleteObra);

module.exports = router;