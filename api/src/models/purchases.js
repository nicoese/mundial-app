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
        type: Date,
        default: new Date()
    },
    email:{
        type: String,
        required: true
    },
    products:[{
        type:Schema.Types.Mixed,
        ref: 'Product'
    }],
    totalPrice: Number
    })

module.exports = model('Purchase',purchasesSchema)