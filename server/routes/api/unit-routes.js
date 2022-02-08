const router = require('express').Router();
const { addUnit } = require('../../controllers/unit-controller');

//add unit to  client
router.route('/:clientId').post(addUnit);

module.exports = router;

