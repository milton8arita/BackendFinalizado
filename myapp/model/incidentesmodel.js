const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incidentesSchema = new Schema({
    tipoIncidente: {type: String, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, required: true},
    accionTomada: {type: String, required: true},
    gasolinera: {type: Schema.Types.ObjectId, ref: 'gasolineras'}
});


module.exports = mongoose.model('incidentes', incidentesSchema);