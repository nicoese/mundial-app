const {Schema, model} = require('mongoose');

const ticketsSchema = new Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    stadium: String,
    date: {
        type: String,
        require: true
    },
    price: Number,
    sector: String
})

module.exports = model('Ticket',ticketsSchema)