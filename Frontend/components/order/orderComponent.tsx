import { useQuery } from '@apollo/client';
import { ORDERS_QUERY } from '../querys/ordersQuery';
import { OrderStyled, OrderSummary, PaymentDetails } from './orderStyled';
import { useRouter } from 'next/router';
import Axios from 'axios';
import { ButtonComponent } from '../button/styles';

const headersGetRequest = {
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers':
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
    'Accept-Language': 'es-ES,es;q=0.9',
    'Content-Type': 'application/json',
    'Auth-Apic': false
  }
};
interface Props {
  id: string | string[] | undefined;
  url: string | string[] | undefined;
}

const OrderComponent = ({ id, url }: Props) => {
  const router = useRouter();
  const { data, error, loading } = useQuery(ORDERS_QUERY, {
    variables: { id }
  });

  const orders = data?.order;
  console.log(orders);

  const payload = orders?.item.map((product: any) => {
    return product.name;
  });

  const price = orders?.total;
  const unit = 1;
  let name = payload;

  const apiPostPayment = async () => {
    if (name.length > 1) {
      name = `Carrito de ${orders.user.name}`;
    } else name = payload.toString();
    try {
      const body = { price, unit, name };

      const url = `${process.env.API_PAYMENT}/payment`;
      const response = await Axios.post(url, body, headersGetRequest);

      router.push(`${response.data.init_point}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <OrderStyled>
        <OrderSummary>
          <h3>Detalle Compra</h3>
          {orders.item.map((product: any, key: number) => (
            <div key={key}>
              <p>{product.name}</p>
              <span>${product.price} </span>
              <span>{product.units}</span>
            </div>
          ))}

          <p>Cantidad de productos: {orders.itemCount}</p>
        </OrderSummary>
        <PaymentDetails>
          <h3>Detalles de envio</h3>
          <label htmlFor="email"> Ingresa tu email</label>
          <input type="email" />
          <label htmlFor="text"> Ingresa tu direccion</label>
          <input type="text" />
          <label htmlFor="text"> Ingresa tu ciudad</label>
          <input type="text" />
          <label htmlFor="number"> Ingresa tu codigo postal</label>
          <input type="number" />
          <div className="total">
            <p>Subtotal: ${orders.total}</p>
            <p>Envio: $500</p>
            <p>Total: ${orders.total + 500}</p>
            <a>Abonar Pedido</a>
          </div>
        </PaymentDetails>

        <ButtonComponent width={'100%'}>Payment</ButtonComponent>
      </OrderStyled>
    </>
  );
};

export default OrderComponent;
