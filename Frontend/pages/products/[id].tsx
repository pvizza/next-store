import type { NextPage } from "next";
import {useRouter} from 'next/router';
import Product from "../../components/products/product";

const PageProduct: NextPage = () => {
  const router = useRouter();
  console.log(router)
  return <div><Product query={router.query}/></div>;
}

export default PageProduct;