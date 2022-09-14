const {Schema, model} = require('mongoose');

const jerseysSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique : true
    },
    brand: String ,
    price:  Number,
    size: {
        type: String,
        enum: ["S", "M", "L", "XL"],
        require: true
    },
    img: String,
    description: String
})

module.exports = model('Jerseys', jerseysSchema)