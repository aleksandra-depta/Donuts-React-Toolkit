import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeMenuBtn } from "../../features/activeBtn/activeBtnSlice";
import { closeSearch } from "../../features/cart/cartSlice";
import { openSideNav } from "../../features/modalSideNav/modalSideNavSlice";
import { scrollToTop } from "../../features/scrollToTop/scrollToTop";
import SearchBar from "../../components/searchBar/searchBar.component";
import SideNav from "../../components/sideNav/sideNav.component";

import { BtnShoppingCart } from "../../styled";
import {
  NavigationContainer,
  LinksContainerLeft,
  LinksContainerRight,
  IconHome,
  IconMenu,
  NavLink,
  NavBackground,
  TotalAmount,
} from "./navigation.styles";

import Donut from "../../img/donut.png";
import Icon from "../../img/icon.png";

const Navigation = () => {
  const { totalAmount } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modalSideNav);
  const { menuBtns } = useSelector((store) => store.activeBtn);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <NavigationContainer>
        <LinksContainerLeft>
          <Link
            to="/"
            onClick={() => {
              dispatch(closeSearch());
              scrollToTop();
            }}
          >
            <IconHome src={Icon} alt="Donut Background Image" />
          </Link>
          <IconMenu onClick={() => dispatch(openSideNav())}>
            <ion-icon name="menu-outline"></ion-icon>
          </IconMenu>
          <NavLink
            to="/menu"
            onClick={() => {
              dispatch(closeSearch());
              scrollToTop();
              dispatch(activeMenuBtn(menuBtns.map((btn) => btn.link)));
            }}
          >
            menu
          </NavLink>
        </LinksContainerLeft>
        <LinksContainerRight>
          <SearchBar />
          <BtnShoppingCart
            to="/shoppingCart/cart"
            onClick={() => {
              dispatch(closeSearch());
              scrollToTop();
            }}
          >
            <ion-icon size="large" name="cart-outline"></ion-icon>
            {totalAmount !== 0 && <TotalAmount>{totalAmount}</TotalAmount>}
          </BtnShoppingCart>
        </LinksContainerRight>
      </NavigationContainer>
      <NavBackground src={Donut} alt="Donut Background Image" />
      <Outlet />
      {isOpen && <SideNav />}
    </Fragment>
  );
};

export default Navigation;
