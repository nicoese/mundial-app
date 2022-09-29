const Product = require('../models/products')


const applyStock = async (products)=>{
    try{
        let result = await products.forEach(e => {
            switch (e.size) {
                case S:{
                    let prod = Product.findByIdAndUpdate(e._id , {stock:{S: [S] - e.cantidad}})
                    let finish = prod.save()
                    return prod
                }
                case M:{
                    let prod = Product.findByIdAndUpdate(e._id , {stock:{M: [M] - e.cantidad}})
                    let finish = prod.save()
                    return prod
                }
                case L:{
                    let prod = Product.findByIdAndUpdate(e._id , {stock:{L: [L] - e.cantidad}})
                    let finish = prod.save()
                    return prod
                }
                case XL:{
                    let prod = Product.findByIdAndUpdate(e._id , {stock:{XL: [XL] - e.cantidad}})
                    let finish = prod.save()
                    return prod
                }
                case X:{
                    let prod = Product.findByIdAndUpdate(e._id , {stock:{X: [X] - e.cantidad}})
                    let finish = prod.save()
                    return prod
                }
                default:
                    break;
            }
        });

        console.log(result)

    }catch(err){
        console.log(err)
    }
}

module.exports = {
    applyStock
}