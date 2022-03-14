class PaymentService {
  constructor() {
    this.tokensMercadoPago = {
      prod: {},
      test: {
        access_token:
          "APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398" 
     // el access_token de MP
      } 
    }; 
// declaramos de la siguiente manera el token
// para que sea más fácil cambiarlo dependiendo del ambiente
    this.mercadoPagoUrl = "https://api.mercadopago.com/checkout"; 
 // declaramos la url en el constructor para poder accederla a lo largo de toda la class
  }
  async createPaymentMercadoPago(name, price, unit, img) {  

    const url = `${this.mercadoPagoUrl}/preferences?access_token=${this.tokensMercadoPago.test.access_token}`; 

  

  const items = [{
    id: "1234",
    title: name,
    description: "",
    picture_url: 'sds',
    category_id: "",
    quntity:10,
    currency_id: "ARS",
    unit_price: 200

  }]
  
  }

}