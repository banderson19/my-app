const router = require('express').Router();
const { getUnits, getUnitById, addUnit, updateUnit, deleteUnit } = require('../../controllers/unit-controller');


// /api/units/
// router.route('/').get(getAllUnit);

// /api/units/<unitId>
// router.route('/:unitId').get(getUnits);

// /api/units/<clientId>
router.route('/:clientId').post(addUnit);

// /api/units/<clientId>/<unitId>
router.route('/:clientId/:unitId').delete(deleteUnit).put(updateUnit);
    


module.exports = router;

