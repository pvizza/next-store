import {useRouter} from 'next/router';

const ProductPagination = () => {
  const router = useRouter();
  console.log(router)
  return <div>
    <h1>ProductPagination</h1>
  </div>;
};

export default ProductPagination;
