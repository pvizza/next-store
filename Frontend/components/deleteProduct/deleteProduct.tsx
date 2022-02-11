import { useMutation } from '@apollo/client';
import {DELETE_PRODUCT_MUTATION} from '../querys/deleteProduct'

type Props = {
  children:string,
  id:string
}

const updatePage = (cache:any,result:any) => {
  console.log(result)
  console.log(cache)
  cache.evict(cache.identify(result.data.deleteProduct));
}



const DeleteProduct = ({children,id}:Props) => {
  const [deleteProduct, { data,loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
      update: updatePage,
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <p>Producto eliminado con exito</p>
  return <button type='button' disabled={loading} onClick={() => deleteProduct().catch((error)=> console.log(error.message))}>{children}</button>;
};

export default DeleteProduct;
