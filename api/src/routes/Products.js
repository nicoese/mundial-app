const { Router, response } = require('express');
const router = Router();
const Products = require('../models/products');
const db = require('../../db.json')



router.get('/', async (req,res,next)=>{
    try{
        let prods = await Products.find();
        res.status(200).json(prods)
    }catch(err){
        next(err)
    }
})


router.get('/find', async (req,res,next)=>{
    try{
        //const docs = await User.find({ email: { $regex: 'gmail' } });
        const {name} = req.query
        let acc = await Products.find({name:{
                $regex: name , $options: 'i'
            }})
        res.status(200).send(acc)
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

        let arr = []
        arr = [...acc,...jer,...tick]
        const result = await Products.insertMany(arr)

        // const resacc = await Accesories.insertMany(acc)
        // const resjer = await Jerseys.insertMany(jer)
        // const restick = await Tickets.insertMany(tick)
    }
    catch(err){
        console.log(err)
    }
}
module.exports = router;