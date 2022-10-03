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
    img: {
        type: String,
        default: "https://www.escribir.com.ar/wp-content/plugins/nimble-builder/assets/img/default-img.png" 
    },
    stock: {S:Number,M:Number,L:Number,XL:Number,Z:Number},
//^^^^^MANDATORY FIELDS^^^^^
    brand: String ,
    description: String,
    stadium: String,
    date: String,
    sector: String,
    rating: Number,
    cantidad: Number,
    active: {
        type:Boolean,
        default : true
    }
})


productsSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

productsSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('Product', productsSchema)