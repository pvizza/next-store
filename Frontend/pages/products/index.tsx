import ProductsComponent from '../../components/products/productsComponent'
import { useQuery } from "@apollo/client";
import {Product} from '../../interfaces/Product'
import PaginationProduct from '../../components/PaginationProduct/paginationProduct';
import { PaginationContainer } from '../../components/PaginationProduct/style';
import {useRouter} from 'next/router';
import {ALL_PRODUCTS_QUERY} from '../../components/querys/allProductsQuery';
import {PRODUCT_PAGE} from '../../config';
import { ProductsStyles } from './style';



const ProductsPage = () => {
  const router = useRouter();
  const page:any = router.query.page
  console.log(router)
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY,{
    variables: {
      skip: page * PRODUCT_PAGE - PRODUCT_PAGE,
      take: PRODUCT_PAGE,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // TODO: Add a loading state and error state

  return <PaginationContainer>
   
        <PaginationProduct page={router.query.page || 1} />
        <ProductsStyles>
    {data.products.map((product: Product) => {
      return <ProductsComponent key={product.id} product={product} />;
    })}
  </ProductsStyles>
  <PaginationProduct page={router.query.page || 1}/>
  </PaginationContainer>
     
  
}

export default ProductsPage
