const {Schema, model} = require('mongoose');

const jerseysSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique : true
    },
    brand: String ,
    price:  Number,
    size: [String],
    img: String,
    stock: Number,
    description: String
})

module.exports = model('Jerseys', jerseysSchema)