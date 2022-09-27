const {Router, response} = require('express');
const router = Router();
const Cart = require('../models/carts')






router.post('/add_to_cart', async (req,res,next)=>{
    try{
        const {userEmail,product} = req.body

        //get document with email and array products
        let user = await Cart.find({email: userEmail})

        //if user never added something to cart we ask
        if(user.length === 0){
            let cart = new Cart({
                email: userEmail,
                products: [product]
            })
            let result = await cart.save()
            return res.status(200).json(result)
        }
        
        // console.log(user[0].email)

        //get the products already added
        let arr = user[0].products
        
        // if not added we insert in the array of prods the new product
        if(!arr.find(e=>e.name === product.name)){
            arr.push(product)
        }else{
            //if product is already there check the quantity
            let newArr = arr.map(e=>{
                if(e.name === product.name){
                    if(e.cantidad !== product.cantidad){
                        e.cantidad = product.cantidad
                    }
                }
            })
        }

        //set new array in cart

        let setCart = user[0].set({products: arr})
        
        let result = await setCart.save()

        return res.status(200).json(setCart)
    }catch(err){
        next(err)
    }


})


router.put('/remove_from_cart', async (req,res,next)=>{
    try{
        const {userEmail,productId} = req.body

        let user = await Cart.find({email: userEmail})

        if (user.length !== 0){

            let filtered = user[0].products.filter(e=>e._id !== productId)

            let setCart = user[0].set({products: filtered})

            let result = setCart.save();

            return res.status(200).json(setCart)
        }
    }catch(err){
        next(err)
    }

})


router.get('/',async (req,res,next)=>{

    try{
        const {email}= req.query

        let user = await Cart.find({email})

        return res.status(200).json(user[0].products)

    }catch(err){
        next(err)
    }

})



module.exports = router;


