const { Router, response } = require('express');
const router = Router();
const Accesories = require('../models/accesories')
const Jerseys = require('../models/jerseys');
const Tickets = require('../models/tickets')



router.get('/', async (req,res,next)=>{
    try{
        let arr = []
        let acc = await Accesories.find();
        let jer = await Jerseys.find();
        let tick = await Tickets.find();

        arr = [...acc,...jer,...tick];

        res.status(200).json(arr)
    }catch(err){
        next(err)
    }
})

module.exports = router;