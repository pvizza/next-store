const PaymentService = require('../services/PaymentService')



exports.getMercadoPagoLink = async (req,res) => {
  console.log('####### LLego al controller')
const {name,price,unit,img} = req.body
console.log('##########',req.body)
  try {
  const checkout =  await PaymentService.createPaymentMercadoPago(name,price,unit,img) 
      return console.log(res.status.json(checkout))
    
  
  }catch(error) {
    console.log(error)
  }

  exports.webhook = async (req, res) => { 
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