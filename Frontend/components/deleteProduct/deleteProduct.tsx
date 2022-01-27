import { useMutation } from '@apollo/client';
import {DELETE_PRODUCT_MUTATION} from '../querys/deleteProduct'

type Props = {
  children:string,
  id:string
}

const updatePage = (cache:any,result:any) => {
  console.log(result)
  cache.evict(cache.identify(result.data.deleteProduct));
}



const DeleteProduct = ({children,id}:Props) => {
  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
      update: updatePage,
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <button type='button' disabled={loading} onClick={() => deleteProduct()}>{children}</button>;
};

export default DeleteProduct;
