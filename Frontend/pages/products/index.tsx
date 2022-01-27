import ProductsComponent from '../../components/products/productsComponent'
import { useQuery } from "@apollo/client";
import {Product} from '../../interfaces/Product'
import styled from 'styled-components';
import PaginationProduct from '../../components/PaginationProduct/paginationProduct';
import { PaginationContainer } from '../../components/PaginationProduct/style';
import {useRouter} from 'next/router';
import {ALL_PRODUCTS_QUERY} from '../../components/querys/allProductsQuery';
import {PRODUCT_PAGE} from '../../config';


// TODO: import querys and styles

const ProductsStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 60px;
  justify-content: space-around;
  margin-top: 50px;
  
`;


const ProductsPage = () => {
  const router = useRouter();
  console.log(router)
  const page:any = router.query.page
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY,{
    variables: {
      skip: page * PRODUCT_PAGE - PRODUCT_PAGE,
      first: PRODUCT_PAGE,
    },
  });
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // TODO: Add a loading state and error state

  return <PaginationContainer>
   
        <PaginationProduct page={router.query.page || 1} />
        <ProductsStyles>
    {data.allProducts.map((product: Product) => {
      return <ProductsComponent key={product.id} product={product} />;
    })}
  </ProductsStyles>
  <PaginationProduct page={router.query.page || 1}/>
  </PaginationContainer>
     
  
}

export default ProductsPage