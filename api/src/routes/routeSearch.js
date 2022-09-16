const {search} = require ('../controllers/index.js');
const {Router} = require('express');
const router = Router()

router.get('/', async (req,res) => {
    const name = req.query.name;
    const busqueda = await search(name)
    res.json(busqueda)
})

module.exports= router



