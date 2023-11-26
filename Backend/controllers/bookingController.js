const router = require('express').Router();
const bookingModel = require('../models/bookingModel')
const auth = require('../auth/auth')

router.post('/', auth.verifyToken, bookingModel.createNewBooking);

router.get('/', bookingModel.getBookings);
router.get('/:id', bookingModel.getBookingById);
router.get('/user/me', auth.verifyToken, bookingModel.getUserBookings);

router.put('/:id', bookingModel.updateBooking);

router.delete('/:id', bookingModel.deleteBooking);

module.exports = router;