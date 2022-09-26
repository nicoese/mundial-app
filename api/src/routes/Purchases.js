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

router.put('/set_status', async (req,res,next)=>{
    const {status,} = req.body;
})

router.get('/last_purchase', async (req,res,next)=>{
    const {email} = req.query;

    console.log(email);

    let result = await Purchase.find({email: email}).sort({"date": -1}).limit(1)

    let setStatus = result[0].set({status: 'success'})

    let success = await setStatus.save()

    console.log(success)

    // db.col.find().sort({"datetime": -1}).limit(1)

    res.status(200).json(result);
    
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