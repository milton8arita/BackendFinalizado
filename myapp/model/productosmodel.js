const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    gasolinera: {type: Schema.Types.ObjectId, ref: 'gasolineras'}
});

module.exports = mongoose.model('productos', productosSchema);;


