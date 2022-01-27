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
  console.log(query)
  const {data, loading, error} = useQuery(PRODUCT_DATA_QUERY,{
    variables:{
      id:query.id
    },
  })
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  console.log(data)
  const {price,description,photo,id} = data.Product
  return <div>
    <Head>
      <title>Store | {query.name}</title>
    </Head>
    {isAdmin &&
    <> 
    <Link href={`/updateProduct/${id}`}><a>Editar</a></Link> 
    <DeleteProduct id={query.id}> Borrar Producto </DeleteProduct>
    </>}
      {photo.map((photo:string,key:number) => {
        return <div key={key} className='imageProduct'>  
        <Image src={photo.image.publicUrlTransformed}
        width={300}
        height={300}
        alt={"imagenes producto"}
      />
       </div>
      })}
   

   
    <h1>{query.name}</h1>
    <p>{price}</p>
    <div className='productDescription'>
    <p>{description}</p>
    </div>

  </div>;
};

export default Product;
