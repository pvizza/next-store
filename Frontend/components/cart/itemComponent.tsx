import { ItemStyle } from './style';
import Image from 'next/image';
import DeleteCart from '../deleteCart/deleteCart';

interface Props {
  units: number
  id: number
  item: {
    name:string
    price:string,
    photo: any

  }
}

const ItemComponent = ({ units, item, id }:Props) => {
  console.log({ units, item, id });
  const { name, price } = item;
  return (
    <div className='item_container'>

      <ItemStyle>
      {item.photo.map((photo:string, key:number) => {
        return <div key={key} className='imageProduct'>
      <Image src={photo.image.publicUrlTransformed}
      width={100}
      height={100}
      alt={'imagenes producto'}
    />

     </div>;
      })}
    <div>
      <h3>{name}</h3>
      <span>${price * units}</span>
      {
        units <= 1 ? <span style={{ marginLeft: '8px' }}> x {units} unidad</span> : <span style={{ marginLeft: '8px' }}> x {units} unidades</span>
      }
      </div>
      </ItemStyle>
      <DeleteCart id={id}/>

    </div>
  );
};

export default ItemComponent;
