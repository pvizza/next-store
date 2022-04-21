import Image from "next/image";
import Link from "next/link";
import { Product } from "../../interfaces/Product";
import AddCartComponent from "../addCart/addCartComponent";
import {ProductBox} from './style'
interface Props {
  product: Product;
}

//! The main product page should only display one image.

const Products = ({ product }: Props) => {
  return (
    <ProductBox>
      {product.photo.map((photo:string,key:number) => {
        return (
         <div className="img_product" key={key}>
              <Link
                href={`/products/${product.id}?id=${product.id}&name=${product.name}`}>
                <a>
                  <Image
                    src={photo.image.publicUrlTransformed}
                    width={300}
                    height={300}
                    alt={"imagenes producto"}
                  />
                </a>
              </Link>
              </div>
        );
      })}
      <div>
      <h1>{product.name}</h1>
      <p className="product_description">{product.description}</p>
      <p className="product_price">${product.price}</p>
      </div>
      <button>Comprar</button>
      <AddCartComponent id={product.id}/>
    </ProductBox>
  );
};

export default Products;
