const {Schema, model} = require('mongoose');

const accesoriesSchema = new Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    price: Number,
    img: String,
    description: String
})
module.exports = model('Accesories',accesoriesSchema)