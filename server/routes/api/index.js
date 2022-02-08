const router = require('express').Router();
const clientRoutes = require('./client-routes');
const unitRoutes = require('./unit-routes');

// add prefix of `/clients` to routes created in `client-routes.js`
router.use('/clients', clientRoutes);
router.use('/units', unitRoutes);

module.exports = router;