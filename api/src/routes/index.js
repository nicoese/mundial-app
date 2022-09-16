const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeSearch = require('./routeSearch')
const routeFilter = require('./routeFilter')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/search', routeSearch)
router.use('/filter', routeFilter)

module.exports = router;
