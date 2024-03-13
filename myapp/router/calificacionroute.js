const express = require('express');
const router = express.Router();

const calificacioncontroller = require('../controllers/calificacioncontroller');

router.get('/', calificacioncontroller.getCalificaciones);
router.post('/', calificacioncontroller.createCalificacion);
router.put('/:id', calificacioncontroller.updateCalificacion)
router.get('/:id', calificacioncontroller.getCalificacion);
router.delete('/:id', calificacioncontroller.deleteCalificacion);

module.exports = router;
