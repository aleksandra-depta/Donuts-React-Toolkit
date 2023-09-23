import { useDispatch, useSelector } from 'react-redux';
import { closeSearch, onSearchChange } from '../../features/cart/cartSlice';

import {
  SearchInput,
  SearchButton,
  SearchForm,
  IconClose
} from './searchBar.styles';

const SearchBar = () => {

  const dispatch = useDispatch();
  const { activeInputSearch } = useSelector((store) => store.cart);

  return (
    <SearchForm>
      { activeInputSearch &&
        <IconClose onClick={() => dispatch(closeSearch())} >
          <ion-icon size='large' name="close-outline"></ion-icon>
        </IconClose>
      }
      <SearchInput 
        type="text" 
        onChange={(e) => {dispatch(onSearchChange(e.target.value))}}
        placeholder="Don'nuts"
      />
      <SearchButton>
        <ion-icon size='large' name="search-outline"></ion-icon>
      </SearchButton>
    </SearchForm>
  )
}

export default SearchBar;