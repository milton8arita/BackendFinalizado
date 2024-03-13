const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const calificacionSchema = new Schema({
    puntuacion: { type: Number, required: true },
    comentario: { type: String , required: true},
    fechaCalificacion: { type: Date , required: true},
    usuario: { type: Schema.Types.ObjectId, ref: 'usuarios' },
    gasolinera: { type: Schema.Types.ObjectId, ref: 'gasolineras' }
});


module.exports = mongoose.model('calificaciones', calificacionSchema);
