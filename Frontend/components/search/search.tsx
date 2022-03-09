import {SearchStyle} from './style'
import { autocomplete } from '@algolia/autocomplete-js';
import { debounce } from "lodash"
import { useRef, useState,useEffect, useMemo } from 'react';
import { SEARCH_PRODUCTS_QUERY } from '../querys/searchProductsQuery';
import { useLazyQuery } from '@apollo/client';
import { createAutocomplete } from '@algolia/autocomplete-core';


interface Props {
  name: string;
  id: string;
}

const AutoCompleteProduct = ({ id,name }:Props) => {
  return (
  <li>

    <p>{name}</p>
  </li>
  )
}

const Search = (props:any) => {
  const [autoCompleteState,setAutoCompleteState] = useState({
    isOpen: false,
    collections: [],
  })
  const [findProduct] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy:'no-cache'
    }
  );
  const findItemsButChill = debounce(findProduct, 350);

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder:'Busca un producto',
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
  }),[props]);
  
    const inputRef = useRef(null)
    const panelRef = useRef(null)

    const inputProps = autocomplete.getInputProps({
      inputElement: inputRef.current,
    })
  
  interface Product {
    id: string;
    name: string;
    
  }

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
              {items.map((item:Item,index:number) => {
                const {data} = item
                return (
                  <section key={`section-${index}`}>
                  <ul {...autocomplete.getListProps()}>
                  {
                    data.products.map((product:Product) => <AutoCompleteProduct key={product.id} {...product}/>)
                  }
                </ul>
                </section>
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

