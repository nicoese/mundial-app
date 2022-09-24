const {Schema, model} = require('mongoose');

const productsSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique : true
    },
    price:{
        type:Number,
        require:true
    },
    type:{
        type: String,
        require:true
    },
    img: String,
    stock: {S:Number,M:Number,L:Number,XL:Number,X:Number},
//^^^^^MANDATORY FIELDS^^^^^
    brand: String ,
    description: String,
    stadium: String,
    date: String,
    sector: String,
    rating: Number,
    cantidad: Number
})

module.exports = model('Product', productsSchema)