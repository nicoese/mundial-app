const { Router, response } = require('express');
const Purchase = require('../models/purchases');
const router = Router();



//purchase toma user products[ids] y totalPrice Number
//632337ef4ed9cc00d7c9d56a <--- este es un id de un usuario, puede que no exista mas

//cuando realizo una compra deberia guardarla en un array de compras hechas por el usuario tmb?
//PENDIENTE

//no esta terminado
router.get('/', async (req,res,next)=>{
    try{
        let result = await Purchase.find()
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})


router.post('/add_purchase', async (req,res,next)=>{
    try{
        const {user,products,totalPrice} =req.body
        let purchase = new Purchase({
            user: user._id,
            products: [...products],
            totalPrice
        })
        const savedPurchase = await purchase.save();
        res.status(200).json(savedPurchase)
    }catch(err){
        next(err)
    }
})


module.exports = router;