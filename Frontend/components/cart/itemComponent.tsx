import {ItemStyle} from './style'
import Image from "next/image";

interface Props {
  units: number
  item: {
    name:string
    price:string

  }
}

const ItemComponent = ({units,item}:Props) => {
console.log({units,item})
const {name,price} = item
  return (
    <div>
      <ItemStyle>
      {item.photo.map((photo:string,key:number) => {
      return <div key={key} className='imageProduct'>  
      <Image src={photo.image.publicUrlTransformed}
      width={100}
      height={100}
      alt={"imagenes producto"}  
    /> 
     </div>
    })}
    <div>
      <h3>{name}</h3>
      <span>${price * units}</span>
      <span> X{units} unidades</span>
      </div>
      </ItemStyle>
      
     
    </div>
  )
}

export default ItemComponent