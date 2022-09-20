const {Router, response} = require('express');
const router = Router();
const Products = require('../models/products');
const db = require('../../db.json')
const {detail} = require('../controllers/index')


//FIND PROD BY NAME
router.get('/find', async (req, res, next) => {
    try {
        const {name} = req.query
        let acc = await Products.find({
            name: {
                $regex: name, $options: 'i'
            }
        })
        res.status(201).json(acc)
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

router.post('/filtroscombinados', async (req, res) => {
    let filter = req.body

    // console.log(req.body[0].type)

    let [
        type,
        brand,
        price
    ] = req.body

        let result = await Products.find({
            $and: [
                {
                    $or: type.type
                    // $or: type.type.length > 0 ? type.type : [{}]
                    // type ? : type.type.length > 0 ? : type.type : [{}] : null
                },
                {
                    // $or: brand && brand.brand.length > 0 ? brand.brand : [{}]
                    $or: brand.brand

                },
                {
                    $or: price ? [{price: {$lte: price.price[1].max || 1000000000, $gte: price.price[0].min || 0}}] : [{}]
                }

            ]
        })
        console.log(result)


})

//FILTER PRODUCTS
router.post('/filtered', async (req, res, next) => {
    // filtro combinado con esto { $or: [ { type: "accesory" }, { type: 'jersey' } ] }
    let filter = req.body
    // return console.log(req.body)

    {
        let result = await Products.find({$or: filter})
        res.status(200).json(result)
    }


    // if(filter.clothes.checked && filter.accessories.checked && filter.tickets.checked ){
    //     let result = await Products.find()
    //     res.status(200).json(result)
    // }
    // if(filter.clothes.checked && filter.accessories.checked){
    //     let arr = []
    //     let clo = await Products.find({type:'jersey', type: 'accesory'})
    //     let acc = await Products.find({type: 'accesory'})
    //     arr = [...clo,...acc]
    //     res.status(200).json(result)
    // }
    // if(filter.clothes.checked && filter.entradas.checked){
    //     let arr = []
    //     let clo = await Products.find({type:'jersey'})
    //     let tick = await Products.find({type: 'ticket'})
    //     arr = [...clo,...tick]
    //     res.status(200).json(result)
    // }
    // if(filter.accessories.checked && filter.entradas.checked){
    //     let arr = []
    //     let acc = await Products.find({type:'accesory'})
    //     let tick = await Products.find({type: 'ticket'})
    //     arr = [...acc,...tick]
    //     res.status(200).json(result)
    // }

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