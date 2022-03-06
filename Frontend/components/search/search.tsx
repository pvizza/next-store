import {SearchStyle} from './style'
import { autocomplete } from '@algolia/autocomplete-js';

const Search = () => {
  return (
    <SearchStyle>
    <input type='text' placeholder='Busca un producto'/>
    </SearchStyle>
  )
}

export default Search