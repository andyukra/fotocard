const { Schema, model } = require('mongoose');

const foto = new Schema({
    filename : { type : String, required : true },
    titulo : { type : String, required : true },
    descripcion : { type : String, required : true }
});

const modelo = model('imagenes', foto);

module.exports = modelo;