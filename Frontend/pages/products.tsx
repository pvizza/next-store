import ProductsComponent from '../components/products/productsComponent'
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {Product} from '../interfaces/Product'
import styled from 'styled-components';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 60px;
  justify-content: space-around;
  margin-top: 50px;
  
`;

//! the navbar is behind the fotos

const ProductsPage = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // TODO: Add a loading state and error state
  return (
    <div>
          < ProductsStyles>
        {data.allProducts.map((product:Product) => {
          return <ProductsComponent key={product.id} product={product} />;})}
           </ProductsStyles>
     
    </div>
  );
}

export default ProductsPage
