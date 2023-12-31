import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";
import NavSteps from "../../components/navSteps/navSteps.component";
import EmptyCart from "../../components/emptyCart/emptyCart.component";
import CardTotals from "../../components/cardTotals/cardTotals.component";
import Footer from "../../components/footer/footer.component";

import { HeadingH3 } from "../../styled";
import { Content, TotalsContainer } from "./shoppingCart.styles";

const ShoppingCart = () => {
  const { activeInputSearch, products } = useSelector((store) => store.cart);

  const cartItems = products.filter((item) => item.inCart === true);

  return (
    <>
      {activeInputSearch ? (
        <SearchBarResults />
      ) : (
        <>
          <NavSteps />
          <div>
            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <Content>
                  <Outlet />
                  <TotalsContainer>
                    <HeadingH3>ORDER SUMMARY</HeadingH3>
                    <CardTotals />
                  </TotalsContainer>
                </Content>
              </>
            )}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ShoppingCart;
