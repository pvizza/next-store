import { useQuery } from '@apollo/client';
import {PaginationStyle} from './style'
import {PAGINATION_PRODUCT_QUERY} from '../querys/paginationProduct';
import Link from 'next/link';
import  {PRODUCT_PAGE} from '../../config'

interface Props {
  page:string;
}

const PaginationProduct = ({page}:Props) => {
  const numberPage = parseInt(page)
  const {data, loading, error} = useQuery(PAGINATION_PRODUCT_QUERY);
  const items = data?._allProductsMeta.count
  // const pages = Math.ceil(items / PRODUCT_PAGE )
  const pages = 10

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>

  return <PaginationStyle>
    <Link href={`/products?page=${numberPage - 1}`}><a aria-disabled={numberPage <= 1}> ⬅ Anterior </a></Link>
    <span>Pagina {numberPage} de {pages}</span>
    <span> {items} Productos en total</span>
    <Link href={`/products?page=${numberPage + 1}`}><a aria-disabled={numberPage >= pages}> Siguiente ➡</a></Link>
    </PaginationStyle>
}

export default PaginationProduct;
