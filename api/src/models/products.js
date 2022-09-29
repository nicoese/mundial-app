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

    // stock: [{id,size:S,stock:10},{}]

//^^^^^MANDATORY FIELDS^^^^^
    brand: String ,
    description: String,
    stadium: String,
    date: String,
    sector: String,
    rating: Number,
    cantidad: Number,
    size: String
})


productsSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

productsSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('Product', productsSchema)