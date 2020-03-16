const express = require('express');
const router = express.Router();
const ObrasController = require('../controllers/ObrasController');

router.get('/', ObrasController.getObras);
router.post('/', ObrasController.postObra);
router.get('/:id', ObrasController.getObra);
router.put('/:id', ObrasController.putObra);
router.delete('/:id', ObrasController.deleteObra);

module.exports = router;