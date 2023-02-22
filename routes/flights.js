var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// This router is mounted to a "starts with" path of '/'

// Get /flights
router.get('/', flightsCtrl.index);

// Get /flights/new
router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

router.post('/:id/tickets', flightsCtrl.addTicket);
// Post /flights
router.post('/', flightsCtrl.create);


// POST /flights/:id/tickets 



module.exports = router;
