const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const productsRoute = require('./Products')

const usersRoute = require('./Users')
const purchasesRoute = require('./Purchases')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', productsRoute);
router.use('/users', usersRoute);
router.use('/purchases',purchasesRoute)




module.exports = router;
