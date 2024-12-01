const express = require('express');
const router = express.Router();

// DEFINIZIONE DEL CONTROLLER
const integrixController = require('./../controllers/integrixController')

// DEFINIZIONE DELLE ROUTE

//ROUTE FRONTEND
router.get('/', integrixController.home)
router.get('/stats', integrixController.void)
router.get('/shifts', integrixController.void)

module.exports = router;