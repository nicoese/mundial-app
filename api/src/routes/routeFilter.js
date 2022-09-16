const {filter} = require ('../controllers/index.js');
const {Router} = require('express');
const router = Router()

router.get('/', async (req,res) => {
    const type = req.query.type;
    const busqueda = await filter(type)
    res.status(200).json(busqueda)
})

module.exports= router