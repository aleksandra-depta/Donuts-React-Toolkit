import { useSelector } from "react-redux";

import SearchBar from "../../components/searchBar/searchBar.component";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";
import { SearchContainer } from "./search.styles";

const Search = () => {
  const { activeInputSearch } = useSelector((store) => store.cart);

  return (
    <SearchContainer>
      <SearchBar />
      {activeInputSearch && <SearchBarResults />}
    </SearchContainer>
  );
};

export default Search;
