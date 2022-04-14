const router = require('express').Router();
const { addService, updateService, deleteService } = require('../../controllers/service-controller');


// /api/services/<clientId>
router.route('/:clientId').post(addService);

// /api/services/<clientId>/<serviceId>
router.route('/:clientId/:serviceId').delete(deleteService).put(updateService)


module.exports = router;