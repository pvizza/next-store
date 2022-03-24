class PaymentController {
  constructor(PaymentService) {
    this.PaymentService = PaymentService; 
  }



async getMercadoPagoLink(req,res,next)  {
  const {name,unit,price} = req.body
  try {
    console.info("#### INIT PAYMENT CONTROLLER ####")
  const payment = await  this.PaymentService.createPayment(name,unit,price)
  console.info("Response success: ",payment)
  return res.status(200).json(payment)
    
  }catch(error) {
    console.log("Error: ",error)
    return res.status(400).json({status: 'error' , message: error.message})
   
  }
    } 

//TODO: configurar medios de pago
}
module.exports = PaymentController;