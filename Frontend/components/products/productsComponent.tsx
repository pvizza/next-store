import Image from 'next/image'
import styled from 'styled-components'

const ProductBox = styled.div`
border: 1px solid #eaeaea;
margin:0px;
`

const Products = ({product}) => {

  return (
    <ProductBox>
      {product.photo.map((photo,key) => {
        return <>
        <div key={key}><Image
          src={photo.image.publicUrlTransformed}
          width={300}
          height={300}
          alt={'imagenes producto'} />
        </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Comprar</button>
        
        </>
})}
    </ProductBox>
  )
}

export default Products;