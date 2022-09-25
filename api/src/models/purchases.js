const {Schema,model} = require('mongoose');
/* 
purchases tiene su id
la fecha de la compra.
quien hizo la compra (user)
los ids de los productos que se compraron
(podemos cambiar esto a directamente todo el producto)
y el precio final
*/
const purchasesSchema = new Schema({
    date:{
        type: Date
    },
    status:{
        type: String,
        default: 'pending'
    },

    email:{
        type: String,
        required: true,
        ref: 'User'
    },
    products:[{
        type:Schema.Types.Mixed,
        ref: 'Product'
    }],
    totalPrice: Number
    })

    purchasesSchema.virtual('id').get(function(){
        return this._id.toHexString();
    });
    
    purchasesSchema.set('toJSON', {
        virtuals: true
    });


module.exports = model('Purchase',purchasesSchema)