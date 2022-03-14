const express = require('express');
const router = express.Router();
const require = require('../controller/PaymentController');


router.post('/payment/new', function(req, res, next) {
  PaymentController.getMercadoPagoLink(req, res) 
});

router.post('/webhook', function(req, res, next) {
  PaymentController.webhook(req, res)
})



module.exports = router;
