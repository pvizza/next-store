import {PRODUCT_DATA_QUERY} from '../querys/productDataQuery'
import {useMutation, useQuery} from '@apollo/client'
import Form from '../form/style';
import useForm from '../../hooks/useForm';
import {useRouter} from 'next/router';
import {UPDATE_PRODUCT_MUTATION} from '../querys/updateProduct'
import { ALL_PRODUCTS_QUERY } from '../../pages/products';

interface Props {
  id: string | string[] | undefined
}

const UpdateProduct = ({id}:Props) => {
  const router = useRouter()
  const { data, error, loading } = useQuery(PRODUCT_DATA_QUERY, {
    variables:  {
      id,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
    } 
  });

  const {handleChange, values, clearForm} = useForm(data?.Product)
  console.log(values)

  const [updateProduct, {data:update ,error:errorOnUpdate, loading:loadingOnUpdate}] = useMutation(UPDATE_PRODUCT_MUTATION,{
    variables: values,
  })

  const handleSubmit = async (e) => {

    // TODO: inputs validations
    if (values.price <= 0) {
      console.log('price must be greater than 0');
    }
    e.preventDefault();
    const res =  await updateProduct()
    clearForm();

    router.push({
      pathname: `/products/${res.data.updateProduct.id}`,
      
    });

    
  }

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>

  return <div>
    <Form onSubmit={handleSubmit}> 
      <fieldset className='ariabusy' aria-busy={loadingOnUpdate}></fieldset>
       <label htmlFor='text'>Nombre</label>
        <input required onChange={handleChange} type="text" placeholder="Product Name" name='name' value={values.name || ''}/>
        <label  htmlFor='number'>Precio</label>
        <input  required onChange={handleChange} type="number" placeholder="Price" name='price' value={values.price || ''}/>
        <label  htmlFor='textarea'>Descripcion</label>
        <textarea  required onChange={handleChange} placeholder="Product Description" name='description' value={values.description || ''}/>
        <label htmlFor="file">Cargar foto</label>
        <input  type="file" name="image" onChange={handleChange} />
        <button type='submit'> Editar Producto</button>
     </Form>
  </div>;
};

export default UpdateProduct;
