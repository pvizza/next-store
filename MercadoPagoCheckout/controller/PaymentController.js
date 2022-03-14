exports.getMercadoPagoLink = async (req,res) => {
const {name,price,unit,img} = req.body
  try {
  const checkout =  await paymentService.createPaymentMercadoPago(name,price,unit,img) 
      return res.redirect(checkout.init_point); 
    
  
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