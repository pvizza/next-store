import {PRODUCT_DATA_QUERY} from '../querys/productDataQuery'
import {useQuery} from '@apollo/client'
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import DeleteProduct from '../deleteProduct/deleteProduct';


interface Props {
  query: {
  name:string ,
  id:string
  }
}

const Product = ({query}:Props) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const {data, loading, error} = useQuery(PRODUCT_DATA_QUERY,{
    variables:{
      id:query.id
    },
  })
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  const {product} = data
  return <div>
    <Head>
      <title>Store | {query.name}</title>
    </Head>
   {(isAdmin && product) ? 
     <>
     <Link href={`/updateProduct/${product.id}`}><a>Editar</a></Link>
     <DeleteProduct id={query.id}> Borrar Producto </DeleteProduct>

     {product.photo.map((photo:string,key:number) => {
      return <div key={key} className='imageProduct'>  
      <Image src={photo.image.publicUrlTransformed}
      width={300}
      height={300}
      alt={"imagenes producto"}
    />
     </div>
    })}
    
    <h1>{query.name}</h1>
    <p>{product.price}</p>
    <div className='productDescription'>
    <p>{product.description}</p>
    </div>
    </>
  :  <p>Producto eliminado con exito</p>
  
  }
  </div>
};

export default Product;
