const {Schema, model} = require('mongoose');

const cartsSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    products:[{
        type:Schema.Types.Mixed,
        ref: 'Product'
    }]
})

cartsSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

cartsSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('Cart',cartsSchema)