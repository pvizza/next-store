import { useMutation } from "@apollo/client";
import {CHECKOUT_MUTATION} from "../querys/checkoutMutation"
import Axios from "axios";
import { USER_QUERY } from "../querys/userQuery";


const headersGetRequest = {
  headers: {
    Accept: "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
    "Accept-Language": "es-ES,es;q=0.9",
    "Content-Type": "application/json",
    "Auth-Apic": false,
  },
};


const Checkout = () => {
  const [checkout,{data, loading, error}] = useMutation(CHECKOUT_MUTATION, {
    variables: {
      token: 'ads',
      refetchQueries: [{query: USER_QUERY }] 
    },
    
  });
  console.log(data)

  const handleClick = () => {
    // checkout();
    apiPostPayment()
  }

  const apiPostPayment = async () => {
    let price = 10
    let unit = 2
    let img = 'd'
    let name = 'lavarropas'
    const body = {price, unit, img, name}
    const url = 'http://localhost:5000/payment/new'
    const response = await Axios.post(url, body, headersGetRequest)
    return response
  }

  return (
    <button onClick={handleClick}>Checkout</button>
  )
}

// TODO: 1 . Solution for photo problem backend
// TODO: 3 . MERCADOPAGO integration

export default Checkout
