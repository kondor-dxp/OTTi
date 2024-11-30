const express = require('express');
const router = express.Router();

// DEFINIZIONE DEL CONTROLLER
const integrixController = require('./../controllers/integrixController')

// DEFINIZIONE DELLE ROUTE

//ROUTE FRONTEND
router.get('/', integrixController.home)

module.exports = router;