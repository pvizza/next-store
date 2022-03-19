const axios = require("axios"); 

class PaymentService {
  constructor() {

    this.tokensMercadoPago = {
      prod: {},
      test: {
        access_token:
          "TEST-346337348469032-013019-b998334b3d76a92b7b6481d7b56cd48e-22115028" 
     // el access_token de MP
      } 
    }; 
// declaramos de la siguiente manera el token
// para que sea más fácil cambiarlo dependiendo del ambiente
  this.mercadoPagoUrl = "https://api.mercadopago.com/checkout"; 
 // declaramos la url en el constructor para poder accederla a lo largo de toda la class


  }


  


 async createPaymentMercadoPago (name, price, unit, img) {  
    console.log('########## paso por aqui')

    const url = `${this.mercadoPagoUrl}/preferences?access_token=${this.tokensMercadoPago.test.access_token}`; 

  

  const items = [{
    id: "1234",
    title: name,
    description: "ddd",
    category_id: "1020",
    quntity:parseInt(unit),
    currency_id: "ARS",
    unit_price: parseFloat(price),
    picture_url:"https://ferreira.vteximg.com.br/arquivos/ids/226134-588-588/to_21871.jpg?v=636615531533330000"

  }]

  const preferences = { 
    // declaramos las preferencias de pago
          items, 
    // el array de objetos, items que declaramos más arriba
          external_reference: "ddd", 
    // referencia para identificar la preferencia, puede ser practicamente cualquier valor
          payer: { 
    // información del comprador, si estan en producción tienen que //traerlos del request
    //(al igual que hicimos con el precio del item) 
            name: "carlos",
            surname: "dd",
            email: "test_user_67625030@testuser.com",
     // si estan en sandbox, aca tienen que poner el email de SU usuario de prueba
            phone: {
              area_code: "22222",
              number: "11"
            },
            address: {
              zip_code: "1659",
              street_name: "pelegrini",
              street_number: "3409"
            }
          }, 
          payment_methods: { 
    // declaramos el método de pago y sus restricciones
            excluded_payment_methods: [ 
    // aca podemos excluir metodos de pagos, tengan en cuenta que es un array de objetos
              {
                id: "amex"
              }
            ],
            excluded_payment_types: [{ id: "atm" }], 
    // aca podemos excluir TIPOS de pagos, es un array de objetos
            installments: 6, 
    // limite superior de cantidad de cuotas permitidas
            default_installments: 6 
    // la cantidad de cuotas que van a aparecer por defecto
          }, 
          back_urls: {
    // declaramos las urls de redireccionamiento
            success: "https://mercadopago-checkout.herokuapp.com/success", 
    // url que va a redireccionar si sale todo bien
            pending: "https://mercadopago-checkout.herokuapp.com/pending", 
    // url a la que va a redireccionar si decide pagar en efectivo por ejemplo
            failure: "https://mercadopago-checkout.herokuapp.com/error" 
    // url a la que va a redireccionar si falla el pago
          }, 
          notification_url: "https://mercadopago-checkout.herokuapp.com/webhook", 
    // declaramos nuestra url donde recibiremos las notificaciones
          auto_return: "approved" 
    // si la compra es exitosa automaticamente redirige a "success" de back_urls
        };

        try {
          const request = await axios.post(url, preferences, {
            headers: { 
              "Content-Type": "application/json"
            }
          });
          return request.data; 
        } catch (e) {
          console.log(e); 
        }      
  
  }


}

module.exports = PaymentService;