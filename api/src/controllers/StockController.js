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
                    let res =  prod.set({stock:{
                        S:(prod.stock.S - e.cantidad),
                        M:(prod.stock.M),
                        L:(prod.stock.L),
                        XL:(prod.stock.XL),
                    }})
                    let save = await res.save()
                    return prod
                }
                case "M":{
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod.stock.M)
                    let res =  prod.set({stock:{
                        S:(prod.stock.S),
                        M:(prod.stock.M - e.cantidad),
                        L:(prod.stock.L),
                        XL:(prod.stock.XL),
                    }})
                    let save = await res.save()
                    return prod
                }
                case "L":{
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod)
                    let res =  prod.set({stock:{
                        S:(prod.stock.S),
                        M:(prod.stock.M),
                        L:(prod.stock.L - e.cantidad),
                        XL:(prod.stock.XL),
                    }})
                    let save = await res.save()
                    return prod
                }
                case "XL":{
                    let prod = await Product.findById(e.id)
                    console.log('PREVIOUS STOCK',prod.stock.XL)
                    let res =  prod.set({stock:{
                        S:(prod.stock.S),
                        M:(prod.stock.M),
                        L:(prod.stock.L),
                        XL:(prod.stock.XL - e.cantidad),
                    }})
                    let save = await res.save()
                    return prod
                }
                case "Z":{
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