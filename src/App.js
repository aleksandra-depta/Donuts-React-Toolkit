import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Menu from "./routes/menu/menu.component";
import MenuCards from "./routes/menuCards/menuCards.component";
import ShoppingCart from "./routes/shoppingCart/shoppingCart.component";
import Cart from "./routes/cart/cart.component";
import AddressForm from "./routes/addressForm/addressForm.component";
import FromDelivery from "./components/formDelivery/formDelivery.component";
import PickUp from "./routes/pickUp/pickUp.component";
import Payment from "./routes/payment/payment.component";
import Confirmation from "./routes/confirmation/confimation.component";
import Locations from "./routes/locations/locations.component";
import SearchBarResults from "./components/searchBarResults/searchBarResults.component";

const App = () => {
  const { products } = useSelector((store) => store.cart);
  const specialsCategory = products.filter((item) => item.type === "specials");
  const donutsCategory = products.filter((item) => item.type === "donuts");
  const coffeeCategory = products.filter((item) => item.type === "coffee");
  const milkShakeCategory = products.filter(
    (item) => item.type === "milkshake"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    function getAllCartItem() {
      dispatch(getCartItems());
    }
    getAllCartItem();
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />}>
          <Route
            path=""
            element={<MenuCards categories={specialsCategory} />}
          />
          <Route
            path="donuts"
            element={
              <MenuCards
                categories={[...donutsCategory, ...specialsCategory]}
              />
            }
          />
          <Route
            path="coffee"
            element={<MenuCards categories={coffeeCategory} />}
          />
          <Route
            path="milkshakes"
            element={<MenuCards categories={milkShakeCategory} />}
          />
        </Route>
        <Route path="/shoppingCart" element={<ShoppingCart />}>
          <Route path="cart" element={<Cart />} />
          <Route path="address" element={<AddressForm />}>
            <Route path="delivery" element={<FromDelivery />} />
            <Route path="pickUp" element={<PickUp />} />
          </Route>
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/search" element={<SearchBarResults />} />
        <Route path="/locations" element={<Locations />} />
      </Route>
    </Routes>
  );
};

export default App;
