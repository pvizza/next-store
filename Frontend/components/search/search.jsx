import {SearchStyle,ProductsContainer,ProductStyle} from './style'
import { debounce } from "lodash"
import { useRef, useState, useMemo } from 'react';
import { SEARCH_PRODUCTS_QUERY } from '../querys/searchProductsQuery';
import { useLazyQuery } from '@apollo/client';
import { createAutocomplete } from '@algolia/autocomplete-core';
import Image from 'next/image'
import { useRouter } from 'next/router';




const AutoCompleteProduct = ({ id,name,photos }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/products/${id}`)
  }

  return (
 
    <ProductStyle onClick={handleClick}>
       
      {photos.map((photo) =>{
        return(
         <Image
         key={id} 
         src={photo.image.publicUrlTransformed} 
         alt={name}
         width="50"
         height="50" />
        )
         })}
    <p>{name}</p>
    </ProductStyle>
  
  )
}

const Search = (props) => {
  const [autoCompleteState,setAutoCompleteState] = useState({
    isOpen: false,
    collections: [],
  })
  
  const [findProduct,{data}] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy:'no-cache'
    }
  );
  const findItemsButChill = debounce(findProduct, 350);
 
 console.log(data)

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Busca un producto',
    onStateChange:({state}) => setAutoCompleteState(state),
    getSources: () => [{
     sourceId: 'products',
     hitsPerPage: 4,
     getItems: ({query}) => findProduct({
       variables:{
         searchTerm:query
        }})
  }],
    ...props
  }),[props,findProduct]);
  
    const inputRef = useRef(null)
    const panelRef = useRef(null)

    const inputProps = autocomplete.getInputProps({
      inputElement: inputRef.current,
    })

  return (
    <SearchStyle>
    <div id="autocomplete"></div>
    <input  ref={inputRef} {...inputProps}/> 
     <div>
      {autoCompleteState.isOpen && (
        <div ref={panelRef} {...autocomplete.getPanelProps()}>
          {autoCompleteState.collections.map((collection,index) => { 
            const {items} = collection
      
            return (
              <div key={index}> 
              {items.map((item,index) => {
                const {data} = item
                return (
                  <ProductsContainer key={`section-${index}`}>
                  <div {...autocomplete.getListProps()}>
                  {
                    data.products.map((product) => <AutoCompleteProduct  key={product.id} id={product.id} name={product.name} photos={product.photo} />)
                  }
                </div>
                </ProductsContainer>
                )
              })}
              </div>
             
            )
          }
            )}
          </div>
          )}
          

      
    </div>
  
    </SearchStyle>
  )
}

export default Search

