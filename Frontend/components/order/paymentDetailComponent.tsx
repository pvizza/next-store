import { useWindow } from '../../hooks/useWindow';

const PaymentDetailComponent = () => {
  const isMobile = useWindow().isMobile;
  return (
    <>
      {isMobile && <div className='payment_detail_container'>
        <div className='payment_detail_header'>
          <h3>Detalle del Pedido</h3>
        </div>
        <div className='payment_detail_body'>
          <p>Producto:</p>
          <p>Precio:</p>
          <p>Cantidad:</p>
          <p>foto</p>
        </div>
        <div className='payment_detail_shipping'>
          <p>Envio direccion:</p>
          <p>Envio costo</p>
          <p>Total:</p>
        </div>

      </div>}
    </>

  );
};

export default PaymentDetailComponent;
