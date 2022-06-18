import { useMutation } from '@apollo/client';
import { CHECKOUT_MUTATION } from '../querys/checkoutMutation';
import { USER_QUERY } from '../querys/userQuery';
import { useRouter } from 'next/router';
import { CartContext } from '../../utils/cartContext';
import { useContext } from 'react';
import { ButtonComponent } from '../button/styles';

const Checkout = ({ products }: any) => {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const [checkout, { data, loading }] = useMutation(CHECKOUT_MUTATION, {

    refetchQueries: [{ query: USER_QUERY }]

  });

  const handleClick = async () => {
    await checkout({
      variables: {
        token: process.env.NEXT_PUBLIC_TOKEN_CART
      }

    });
    await apiPostPayment();
    await cartContext.closeCart();
    //  await apiPostPayment()
  };

  // const payload = products?.cart.map((item:any) => {

  //     return  item.product.name

  // })
  // const price = calcPrice(products?.cart)
  // const unit = 1
  // let name = payload

  // const apiPostPayment = async () => {

  //   if(name.length > 1){
  //     name = `Carrito de ${products.name}`
  //   } else name = payload.toString()
  //   try{
  //   const body = {price, unit, name}

  //   const url = `${process.env.API_PAYMENT}/payment`
  //   const response = await Axios.post(url, body, headersGetRequest)
  //   const {checkout} = data

  //     cartContext.toogleCart()
  //     router.push({
  //     pathname: `/order/${checkout.id}`,
  //     query: {
  //       id: checkout.id,
  //       url: response.data.init_point
  //     }
  //     })
  //   return response
  //   }catch(error){
  //     console.log(error)
  //   }

  // }

  const apiPostPayment = () => {
    router.push({ pathname: `/order/${data?.checkout.id}` });
  };
  return (
    <>
    <ButtonComponent onClick={handleClick} width={'100%'}>Checkout</ButtonComponent>
    </>
  );
};

// TODO: 1 . Solution for photo problem backend
// TODO: 2 . Solution for first checkout error

export default Checkout;
