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

//no esta terminado
router.post('/create_user', async (req,res,next)=>{
    try{
        const {first_name,last_name} = req.body
        console.log(first_name);
        let user = new User({
            first_name,
            last_name,
            img: 'imagen',
        })
        const savedUser = await user.save()
        res.status(200).json(savedUser)
    }catch(err){
        next(err);
    }
})

//traerme las compras de un usuario
//problemas con el populate, ya que los productos son de 3 modelos distintos
//PENDIENTE

router.get('/:userId/purchases', async (req,res,next)=>{
    try{
        const {userId} = req.params;
        let response = await Purchase.find({user: userId}).populate({path: 'products'})
        res.status(200).json(response);
    }catch(err){
        next(err)
    }
})



module.exports = router;