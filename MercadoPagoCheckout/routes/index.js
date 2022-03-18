const express = require('express');
const router = express.Router();
const PaymentController = require('../controller/PaymentController');


router.post('/payment/new', function(req, res, next) {
  console.log('####### LLego a la ruta')

  PaymentController.getMercadoPagoLink(req, res) 
});

router.post('/webhook', function(req, res, next) {
  PaymentController.webhook(req, res)
})



module.exports = router;
