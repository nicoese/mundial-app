const { Router, response } = require('express');
const Purchase = require('../models/purchases');
const User = require('../models/users');
const stockController = require('../controllers/StockController')
const axios = require('axios')
const router = Router();



//.populate({path: 'user', select: 'first_name last_name -_id'})

//get all purchases with user info
router.get('/', async (req,res,next)=>{
    try{
        let {email} = req.query
        if(email){
            let result = await Purchase.find({email:email})
            return res.status(200).json(result)
        }
        let result = await Purchase.find({})
        return res.status(200).json(result)
    }catch(err){
        next(err)
    }
})

router.put('/set_status', async (req,res,next)=>{
    const {status,} = req.body;
})

router.get('/last_purchase', async (req,res,next)=>{
    try{
        const {email} = req.query;

        let result = await Purchase.find({email: email}).sort({"date": -1}).limit(1)
        // db.col.find().sort({"datetime": -1}).limit(1)

        let setStatus = result[0].set({status: 'success'})

        let success = await setStatus.save()

        //Applying stock changes PROCESS

        stockController.applyStock(result[0].products)

        // SENDING EMAIL PROCESS

        let {products,totalPrice,_id} = result[0]

        // console.log(result[0])

        let mailed = await axios.post(`${process.env.API_URL}/mails/purchase_success`,
        {
            email: result[0].email,
            products,
            totalPrice,
            id: _id
        })

        return res.status(200).json(result);

    }catch(err){
        next()
    }
})

router.put('/purchase_failed', async (req,res,next)=>{
    const {email} = req.query;

    let result = await Purchase.find({email: email}).sort({"date": -1}).limit(1)

    let setStatus = result[0].set({status: 'failed'})

    let success = await setStatus.save()

    res.status(201).send('purchase status failed saved');

})

//get all purchases by userId
// router.get('/:userId', async (req,res,next)=>{
//     try{
//         const {userId} = req.params
//         let result = await Purchase.find({user: userId})
//         res.status(200).json(result)
//     }catch(err){
//         next(err)
//     }

// })


module.exports = router;