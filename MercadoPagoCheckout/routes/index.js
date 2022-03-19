const express = require('express');
const router = express.Router();
const PaymentService = require("../services/PaymentService"); 
const PaymentController = require("../controller/PaymentController");
const PaymentInstance = new PaymentController(new PaymentService());


router.post('/payment/new', function(req, res, next) {
  console.log('####### LLego a la ruta')

  PaymentInstance.getMercadoPagoLink(req, res) 
});

router.post('/webhook', function(req, res, next) {
  PaymentInstance.webhook(req, res)
})



module.exports = router;
