const {Schema, model} = require('mongoose');

const accesoriesSchema = new Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    price: Number,
    img: String,
    stock: {X:Number},
    description: String
})
module.exports = model('Accesories',accesoriesSchema)