const { Router, response } = require('express');
const Purchase = require('../models/purchases');
const User = require('../models/users');
const router = Router();




//.populate({path: 'user', select: 'first_name last_name -_id'})

//get all purchases with user info
router.get('/', async (req,res,next)=>{
    try{
        let result = await Purchase.find({})
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})

//get all purchases by userId
router.get('/:userId', async (req,res,next)=>{
    try{
        const {userId} = req.params
        let result = await Purchase.find({user: userId})
        res.status(200).json(result)
    }catch(err){
        next(err)
    }

})


router.put('/set_status', (req,res,next)=>{
    const {status,} = req.body;
})

router.get('/last_purchase',(req,res,next)=>{
    
})

//add a purchase, i get by body the user, all the products and the total price..
//MIGHT CHANGE
router.post('/add_purchase', async (req,res,next)=>{
    try{
        console.log('entro a la purchase')
        const {user,products,totalPrice} =req.body
        let purchase = new Purchase({
            email: user.email,
            products: [...products],
            totalPrice
        })
        const savedPurchase = await purchase.save();

        //^^purchase done, now saving it in the user

        // let found = await User.findById(user._id)
        // let savedInUser = found.set('purchases',[...found.purchases,savedPurchase._id])
        // let result = await savedInUser.save()
        res.status(200).json(savedPurchase)

    }catch(err){
        next(err)
    }
})


module.exports = router;