const {Router, response} = require('express');
const router = Router();
const Info_user = require('../models/users_info')



//me parece que hay un temita con la info cuando vayamos a modificarla
// por que algunos datos estan aca y otros datos estan en User...
//hay que ver bien...

router.get('/', async (req,res,next)=>{
    try{
        const {email} = req.query
        let result = await Info_user.find({email:email})
        res.status(200).send(result[0])
    }catch(err){
        next(err)
    }
})

router.post('/update', async (req,res,next)=>{



    try{
        let {email,address,city,country,apartment,postalCode,phoneNumber} = req.body

        let found = await Info_user.findOneAndUpdate({email},{address,city,country,apartment,postalCode,phoneNumber},{upsert: true, new: true})

        res.status(200).json(found)
    }catch(err){
        next(err)
    }
})


router.post('/update', async (req,res,next)=>{
    try{
        let {email,address,city,country,apartment,postalCode,phoneNumber} = req.body

        let found = await Info_user.findOneAndUpdate({email},{address,city,country,apartment,postalCode,phoneNumber},{upsert: true, new: true})

        res.status(200).json(found)
    }catch(err){
        next(err)
    }
})



module.exports = router;