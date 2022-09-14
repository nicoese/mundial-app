const {Schema, model} = require('mongoose');

const jerseysSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique : true
    },
    brand: String ,
    price:  Number,
    img: String,
    stock: {S:Number,M:Number,L:Number,XL:Number},
    description: String
})

module.exports = model('Jerseys', jerseysSchema)