const router = require('express').Router();
const clientRoutes = require('./client-routes');
const unitRoutes = require('./unit-routes');
const serviceRoutes = require('./service-routes');

// add prefix of `/clients` to routes created in `client-routes.js`
router.use('/clients', clientRoutes);
router.use('/units', unitRoutes);
router.use('/services', serviceRoutes);

module.exports = router;