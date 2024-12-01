const express = require('express');
const router = express.Router();

// DEFINIZIONE DEL CONTROLLER
const ajaxController  = require('./../controllers/ajaxController')
const integrixController = require('./../controllers/integrixController')

// DEFINIZIONE DELLE ROUTE

//ROUTE AJAX
router.post('/ajax/:ajax', ajaxController.call)

//ROUTE FRONTEND
router.get('/', integrixController.home)
router.get('/stats', integrixController.void)
router.get('/shifts', integrixController.void)

module.exports = router;