const Product = require('../models/products')


const applyStock = async (products)=>{
    try{
        let result = await products.forEach( async (e) => {
                // if(e.size === "X"){
                //     let prod = await Product.findById(e.id)
                //     console.log('PREVIOUS STOCK',prod.stock.X)
                //     let res =  prod.set({stock:{X:(prod.stock.X-e.cantidad)}})
                //     let save = await res.save()
                //     return prod
                // }
            switch (e.size) {
                case "S":{
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod.stock.S)
                    let res =  prod.set({stock:{S:(prod.stock.S-e.cantidad)}})
                    let save = await res.save()
                    return prod
                }
                case "M":{
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod.stock.M)
                    let res =  prod.set({stock:{M:(prod.stock.M-e.cantidad)}})
                    let save = await res.save()
                    return prod
                }
                case "L":{
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod.stock.L)
                    let res =  prod.set({stock:{L:(prod.stock.L-e.cantidad)}})
                    let save = await res.save()
                    return prod
                }
                case "XL":{
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod.stock.XL)
                    let res =  prod.set({stock:{XL:(prod.stock.XL-e.cantidad)}})
                    let save = await res.save()
                    return prod
                }
                case "Z":{
                    console.log('entre a case stock')
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod.stock.Z)
                    let res =  prod.set({stock:{Z:(prod.stock.Z-e.cantidad)}})
                    let save = await res.save()
                    return prod
                }
                default:
                    break;
            }
        });
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    applyStock
}