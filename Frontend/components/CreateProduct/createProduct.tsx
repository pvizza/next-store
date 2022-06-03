import { useMutation } from '@apollo/client';
import useForm from '../../hooks/useForm';
import { ALL_PRODUCTS_QUERY } from '../querys/allProductsQuery';
import Form from '../form/style';
import { NEW_PRODUCT_MUTATION } from '../querys/createProductMutation';
import { useRouter } from 'next/router';

const CreateProducts = () => {
  const router = useRouter();
  const { handleChange, values, clearForm } = useForm({
    name: '',
    price: '',
    description: ''

  });

  const [createProduct, { data, error, loading }] = useMutation(
    NEW_PRODUCT_MUTATION,
    {
      variables: values,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]

    });

  const handleSubmit = async (e) => {
    // TODO: inputs validations
    if (values.price <= 0) {
      console.log('price must be greater than 0');
    }
    e.preventDefault();
    const res = await createProduct();
    clearForm();

    router.push({
      pathname: `/products/${res.data.createProduct.id}`,
      query: { id: res.data.createProduct.id, name: res.data.createProduct.name }

    });
  };
  // TODO: PRODUCT CREATE SUCCESS MESSAGE
  // TODO: PRODUCT CREATE ERROR MESSAGES

  //! no change state of loading
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <fieldset className='ariabusy' aria-busy={loading}></fieldset>
       <label htmlFor='text'>Nombre</label>
        <input required onChange={handleChange} type="text" placeholder="Product Name" name='name' value={values.name || ''}/>
        <label htmlFor='number'>Precio</label>
        <input required onChange={handleChange} type="number" placeholder="Price" name='price' value={values.price || ''}/>
        <label htmlFor='textarea'>Descripcion</label>
        <textarea required onChange={handleChange} placeholder="Product Description" name='description' value={values.description || ''}/>
        <label htmlFor="file">Cargar foto</label>
        <input required type="file" name="image" onChange={handleChange} />
        <button type='submit'> Cargar Producto</button>
     </Form>
    </>
  );
};

export default CreateProducts;
