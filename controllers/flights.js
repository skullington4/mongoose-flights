const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addTicket
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
      });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', { title: 'Flight Detail', flight, tickets });
      });
  });
  }

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function addTicket(req, res) {
  const seat = req.body.seat;
  const price = req.body.price;
  const flight = req.params.id;
  const ticket = new Ticket({seat, price, flight});
  ticket.save(function(err) {
      if (err) return res.render('flight/:id');
      res.redirect(`/flights/${flight}`);
  });
}