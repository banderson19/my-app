const router = require('express').Router();
const { addService, updateService, deleteService } = require('../../controllers/service-controller');


// /api/services/<clientId>
router.route('/:unitId').post(addService);

// /api/services/<clientId>/<serviceId>
router.route('/:unitId/:serviceId').delete(deleteService).put(updateService)


module.exports = router;