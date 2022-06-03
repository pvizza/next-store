import UpdateProduct from '../../components/updateProduct/updateProduct';
import { useRouter } from 'next/router';

const UpdateProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>
    <UpdateProduct id={id}/>
  </div>;
};

export default UpdateProductPage;
