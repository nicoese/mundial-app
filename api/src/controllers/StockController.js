const Product = require('../models/products')


const applyStock = async (products)=>{

   let result = await products.forEach(e => {
            switch (e.size) {
                case S:{
                    let prod = Product.findByIdAndUpdate(e._id , {stock:{S: [S] - e.cantidad}})
                    let finish = prod.sav
                }

                    
                    break;
            
                default:
                    break;
            }
                // let prod = Product.findByIdAndUpdate()
   });

}

module.exports = {
    applyStock
}