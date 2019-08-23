const { Schema, model } = require('mongoose');

const coment = new Schema({
    id : { type : String, required : true },
    name : { type : String, required : true },
    coment : { type : String, required : true }
});

const modelo = model('comentarios', coment);

module.exports = modelo;