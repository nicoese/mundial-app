const { Router, response } = require('express');
const router = Router();
const Purchase = require('../models/purchases')
const User = require('../models/users');

router.get('/', async (req,res,next)=>{
    try{
        let result = await User.find()
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})

//this route modifies user, you can modify your name or the img in your profile
//we can add more params in body for mods
router.put('/:userId/modify_user', async (req,res,next)=>{
    try{
        const{userId} = req.params
        const{first_name,last_name,img} = req.body

        let updated_user = await User.findByIdAndUpdate(userId,{first_name,last_name,img})
        res.status(200).json(updated_user)
    }catch(err){
        next(err);
    }
})

router.delete('/delete_user', async (req,res,next)=>{
    try {
        const {userId} = req.params
        let found = await User.findByIdAndDelete(userId)

        res.status(200).json(found)
    }catch(err){
        next(err)
    }
})




module.exports = router;