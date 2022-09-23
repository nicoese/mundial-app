const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeSearch = require('./routeSearch')
const routeFilter = require('./routeFilter')
const routeMP = require ('./mercadoPago')

const productsRoute = require('./Products')

const usersRoute = require('./Users')
const purchasesRoute = require('./Purchases')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', productsRoute);
router.use('/users', usersRoute);
router.use('/purchases',purchasesRoute)
router.use('/prueba', routeMP)



router.use('/search', routeSearch)
router.use('/filter', routeFilter)

module.exports = router;
