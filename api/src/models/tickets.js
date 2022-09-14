const {Schema, model} = require('mongoose');

const ticketsSchema = new Schema({
    match:{
        type: String,
        require: true
    },
    stadium: String,
    date: {
        type: Date,
        require: true
    },
    price: Number,
    sector: String
})

module.exports = model('Tickets',ticketsSchema)