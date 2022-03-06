import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Product } from "../../interfaces/Product";
import AddCartComponent from "../addCart/addCartComponent";


const ProductBox = styled.div`
  border: 1px solid #eaeaea;
  margin: 0px;
`;
interface Props {
  product: Product;
}

//! The main product page should only display one image.

const Products = ({ product }: Props) => {
  return (
    <ProductBox>
      {product.photo.map((photo:string,key:number) => {
        return (
         <div key={key}>
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
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Comprar</button>
      <AddCartComponent id={product.id}/>
    </ProductBox>
  );
};

export default Products;
