import { useDispatch, useSelector } from "react-redux";
import { closeSearch } from "../../features/cartSlice";
import CardMenu from "../cardMenu/cardMenu.component";
import { scrollToTop } from "../../features/scrollToTop";

import { BtnBlack, HeadingH1Brown, HeadingH4 } from "../../styled";
import {
  ButtonContent,
  Content,
  FilteredContainer,
  IconClose,
} from "./searchBarResults.styles";

const SearchBarResults = () => {
  const { products, searchField } = useSelector((store) => store.cart);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchField.toLowerCase())
  );
  const dispatch = useDispatch();

  return (
    <FilteredContainer>
      {filteredProducts.length === 0 ? (
        <HeadingH1Brown>No results</HeadingH1Brown>
      ) : (
        <Content>
          {filteredProducts.map((item) => (
            <CardMenu key={item._id} product={item} />
          ))}
        </Content>
      )}
      <ButtonContent>
        <IconClose
          onClick={() => {
            dispatch(closeSearch());
            scrollToTop();
          }}
        >
          <ion-icon size="large" name="close-outline"></ion-icon>
          <HeadingH4>Back to page</HeadingH4>
        </IconClose>
        <BtnBlack
          to="/menu"
          onClick={() => {
            dispatch(closeSearch());
            scrollToTop();
          }}
        >
          Check menu
        </BtnBlack>
      </ButtonContent>
    </FilteredContainer>
  );
};

export default SearchBarResults;
