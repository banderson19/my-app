const router = require('express').Router();
const {
    getAllClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient
  } = require('../../controllers/client-controller');

// Set up GET all and POST at /api/clients
router
  .route('/')
  .get(getAllClient)
  .post(createClient);

// Set up GET one, PUT, and DELETE at /api/clients/:id
router
  .route('/:id')
  .get(getClientById)
  .put(updateClient)
  .delete(deleteClient);

module.exports = router;