const router = require('express').Router();
const clientRoutes = require('./client-routes');

// add prefix of `/clients` to routes created in `client-routes.js`
router.use('/clients', clientRoutes);

module.exports = router;