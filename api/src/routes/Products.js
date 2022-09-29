const {Router, response} = require('express');
const router = Router();
const Products = require('../models/products');
const db = require('../../db.json')
const {postProducts} = require ('../controllers/index')


//FIND PROD BY NAME
router.get('/find', async (req, res, next) => {
    try {
        const {name} = req.query
        if(!name){
            let result = await Products.find()
           return res.json(result)
        }
        let acc = await Products.find({
            name: {
                $regex: name, $options: 'i'
            }
        })
      return  res.status(201).json(acc)
    } catch (err) {
        next(err)
    }
})

// GET ALL PRODUCTS
router.get('/', async (req, res, next) => {
    try {
        let prods = await Products.find()
        res.status(200).json(prods)
    } catch (err) {
        next(err)
    }
})

//GET PRODUCT DETAIL BY ID
router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const result = await Products.findById(id)
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
})

//POST NEW PRODUCTS BY ADMIN
router.post('/newProduct', async (req,res) => {
    try {
        const produc = req.body
        const saved= await postProducts(produc)
        return res.status(200).send("producto guardado")   
    } catch (error) {
        return res.status(400).send(error.message)   
    }
})



//FILTER PRODUCTS
router.post('/filtroscombinados', async (req, res) => {
    let {type,brand,min,max} = req.body
    // console.log(type,brand,min,max)
    
        let result = await Products.find({
            $and: [
                {
                    $or: type || [{}]
                    // $or: type.type.length > 0 ? type.type : [{}]
                    // type ? : type.type.length > 0 ? : type.type : [{}] : null
                },
                {
                    // $or: brand && brand.brand.length > 0 ? brand.brand : [{}] || [{}]
                    $or: brand || [{}]
                },
                {
                    $or: [{price: {$lte: max[0].max || 1000000000, $gte: min[0].min || 0}}] || [{}]
                }
            ]
        })
        res.json(result)
})



//esta ruta existe solo con el proposito de insertar todos los datos en la BD, no utilizar
router.post('/insert_products', async (req, res, next) => {
    try {
        insertProducts();
        res.status(200).send('inserted')
    } catch (err) {
        next(err)
    }
})

//funcion que inserta todos los productos del db.json a mongo en cantidad.
const insertProducts = async () => {
    try {
        let acc = db.products.accessories
        let jer = db.products.jerseys
        let tick = db.products.tickets

        let arr = []
        arr = [...acc, ...jer, ...tick]
        const result = await Products.insertMany(arr)

        // const resacc = await Accesories.insertMany(acc)
        // const resjer = await Jerseys.insertMany(jer)
        // const restick = await Tickets.insertMany(tick)
    } catch (err) {
        console.log(err)
    }
}
module.exports = router;