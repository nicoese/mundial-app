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
    user: Schema.Types.ObjectId,
    products:[Schema.Types.ObjectId],
    totalPrice: Number
    })

module.exports = model('Purchases',purchasesSchema)