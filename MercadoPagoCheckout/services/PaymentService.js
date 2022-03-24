const axios = require('axios');
const { payment } = require('mercadopago/lib/resources/ipn');
require("dotenv").config();

class PaymentService {
  
  async createPayment(name,unit,price) {
    console.log(name,unit,price)
    const url = "https://api.mercadopago.com/checkout/preferences";

    console.info('### INIT PAYMENT SERVICE ###')

    const body = {
      items: [
        {
          title: name,
          quantity: parseInt(unit),
          unit_price: parseFloat(price),
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "localhost:3000/"
        //TODO: agregar url de exito, error o cancelacion
      },
      auto_return: "approved",
    }

    try {
    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_PROD}`
      }
    });
    return payment.data;
  } catch (error) {
    console.log(error)
    throw Error(error.response.data.message);
    

    
  }
  
}
}

module.exports = PaymentService;