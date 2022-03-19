class PaymentController {
  constructor(paymentService) {
    this.paymentService = paymentService; 
  }



async getMercadoPagoLink(req,res)  {
  console.log('####### LLego al controller')
const {name,price,unit,img} = req.body
console.log('##########',req.body)
  try {
  const checkout = await  this.paymentService.createPaymentMercadoPago(name,price,unit,img) 
  return console.log(checkout)
    
  
  }catch(error) {
    console.log(error)
  }
    } 
      webhook(req, res)  { 
    if (req.method === "POST") { 
      let body = ""; 
      req.on("data", chunk => {  
        body += chunk.toString();
      });
      req.on("end", () => {  
        console.log(body, "webhook response"); 
        res.end("ok");
      });
    }
    return res.status(200); 
  }




}
module.exports = PaymentController;