const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeSearch = require('./routeSearch')
const routeFilter = require('./routeFilter')
const routeMP = require ('./mercadoPago')


const productsRoute = require('./Products')
const usersRoute = require('./Users')
const purchasesRoute = require('./Purchases')
const favoritesRoute = require('./Favorites')
const cartsRoute = require('./Carts')
const mailsRoute = require('./Mails')
const info_usersRoute = require('./Info_user')
const reviewsRoute = require('./Reviews')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/products', productsRoute);
router.use('/users', usersRoute);
router.use('/purchases',purchasesRoute)
router.use('/favorites',favoritesRoute)
router.use('/carts',cartsRoute)
router.use('/mails',mailsRoute)
router.use('/info',info_usersRoute)
router.use('/reviews',reviewsRoute)





router.use('/mp', routeMP)
router.use('/search', routeSearch)
router.use('/filter', routeFilter)

module.exports = router;
