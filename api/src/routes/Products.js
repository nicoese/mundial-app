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

router.get('/find', async (req,res,next)=>{
    try{
        //const docs = await User.find({ email: { $regex: 'gmail' } });
        const {name} = req.query
        let acc = await Accesories.find({name:{
                $regex: name , $options: 'i'
            }})
        let jer = await Jerseys.find({name:{
                $regex: name , $options: 'i'
            }})
        let tick = await Tickets.find({name:{
                $regex: name , $options: 'i'
            }})
        let arr = []
        arr = [...acc,...jer,...tick]
        res.status(200).send(arr)
    }catch(err){
        next(err)
    }
})



//esta ruta existe solo con el proposito de insertar todos los datos en la BD, no utilizar
router.post('/insert_products',async (req,res,next)=>{
    try{
        insertProducts();
        res.status(200).send('inserted')
    }catch(err){
        next(err)
    }
})

//funcion que inserta todos los productos del db.json a mongo en cantidad.
const insertProducts = async ()=>{
    try{
        let acc = db.products.accessories
        let jer = db.products.jerseys
        let tick = db.products.tickets
        const resacc = await Accesories.insertMany(acc)
        const resjer = await Jerseys.insertMany(jer)
        const restick = await Tickets.insertMany(tick)
    }
    catch(err){
        console.log(err)
    }
}
module.exports = router;