const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const eventosSchema = new Schema({
    id_gasolinera: [{ type: Schema.Types.ObjectId, ref: 'gasolineras' }] ,
    fecha_inicio: {type: Date, required: true},
    fecha_cierre: {type: Date, required: true},
    descripcion: {type: String, required: true}
})


module.exports = mongoose.model('eventos', eventosSchema);
