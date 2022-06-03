import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../interfaces/Product';
import AddCartComponent from '../addCart/addCartComponent';
import { ProductBox } from './style';
import { FaCartPlus } from '@react-icons/all-files/fa/FaCartPlus';
import BuyComponent from '../buyButton/buyComponent';
interface Props {
  product: Product;
}

//! The main product page should only display one image.

const Products = ({ product }: Props) => {
  return (
    <ProductBox>
      {product.photo.map((photo:string, key:number) => {
        return (
         <div className="img_product" key={key}>
              <Link
                href={`/products/${product.id}?id=${product.id}&name=${product.name}`}>
                <a>
                  <Image
                    src={photo.image.publicUrlTransformed}
                    width={300}
                    height={300}
                    alt={'imagenes producto'}
                  />
                </a>
              </Link>
              </div>
        );
      })}
      <div className="title_product">
      <h1>{product.name}</h1>
      {/* <p className="product_description">{product.description}</p> */}
      <div className="description_product">
      <span className="product_price">${product.price}</span>
      <div className="icon_add_product">
      <AddCartComponent id={product.id}/>
     {/* <FaCartPlus style={{color:"#fff",paddingTop:"4px",fontSize:"1.8rem"}}/> */}
      </div>
      </div>
      </div>
      <BuyComponent/>

    </ProductBox>
  );
};

export default Products;
