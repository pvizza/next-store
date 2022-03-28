import { useMutation } from "@apollo/client";
import {CHECKOUT_MUTATION} from "../querys/checkoutMutation"
import Axios from "axios";
import { USER_QUERY } from "../querys/userQuery";
import { useRouter } from "next/router";
import calcPrice from '../../utils/calcPrice'
import { CartContext } from "../../utils/cartContext";
import {useContext} from 'react'

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


const Checkout = ({products}:any) => {
  const router = useRouter();
  const cartContext = useContext(CartContext)
  const [checkout,{data, loading}] = useMutation(CHECKOUT_MUTATION, {
    
      refetchQueries: [{query: USER_QUERY }] 
    
  });
  console.log(data)

  const handleClick = async () => {
    await checkout({
     variables: {
      token: process.env.NEXT_PUBLIC_TOKEN_CART
     }
   })
   await apiPostPayment()
  }

 
  const payload = products?.cart.map((item:any) => {
   
      return  item.product.name
    
  })
  const price = calcPrice(products?.cart)
  const unit = 1
  let name = payload

 

  const apiPostPayment = async () => {
    if(name.length > 1){
      name = `Carrito de ${products.name}`
    } else name = payload.toString()
    try{
    const body = {price, unit, name}
    console.log(body)
    const url = `${process.env.API_PAYMENT}/payment`
    const response = await Axios.post(url, body, headersGetRequest)
    router.push({
    pathname:  `/order/${data.checkout.id}`,
    query: {
      id: data.checkout.id,
      url: response.data.init_point
    }
    })
    cartContext.toogleCart()
    return response
    }catch(error){
      console.log(error)
    }
  }

  return (
    <button disabled={loading} onClick={handleClick}>Checkout</button>
  )
}

// TODO: 1 . Solution for photo problem backend

export default Checkout
