import React from 'react'
import { SearchStyle,DropDown,DropDownItem } from './style'
import { resetIdCounter, useCombobox } from 'downshift';
import { SEARCH_PRODUCTS_QUERY } from '../querys/searchProductsQuery';
import { useLazyQuery,useQuery } from '@apollo/client';
import { debounce } from 'lodash';

const NewSearch = () => {
  
  const [findItems,{data,loading}] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy:'no-cache',
     
      
    }
  );
  const items = data?.products || [];
 
  const findItemsButChill = debounce(findItems, 850);
  resetIdCounter()
  
  const {getInputProps,getItemProps,getMenuProps,getComboboxProps,isOpen,inputValue,highlightedIndex,selectedItem,onInputValueChange} = useCombobox({
    items,
    onInputValueChange() {
      if(inputValue.length <= 0){
        return null
      }
      findItemsButChill({variables:{
        searchTerm:inputValue
      }})
      console.log(inputValue)
    
    
    console.log('input')
    // onSelectedItemChange({ selectedItem }) {
    //   console.log('selected')
      
    // },
    }

  }) 
 
  return (
    <SearchStyle>
      <div {...getComboboxProps()}>
      <input {...getInputProps({
        type: 'search',
        placeholder: 'Busca un producto',
        id: 'search', 
      })}/>
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen ? 
        items?.map((item,index) => {
          return (
            <DropDownItem {...getItemProps({item,index})}  key={item.id}
            highlighted={index === highlightedIndex} >
              <p>{item.name}</p>
            </DropDownItem>
          )
        }):null}
      {isOpen  && !items.length && !loading ? (
          <div>Sorry, No items found for {inputValue}</div>
        ) : null}
      </DropDown>
    </SearchStyle>
  )
}

export default NewSearch