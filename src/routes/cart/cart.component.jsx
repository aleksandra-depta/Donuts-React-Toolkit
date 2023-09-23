import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { activeCartNavBtn, stepAccess } from "../../features/activeBtn/activeBtnSlice";
import CardShoppingCart from "../../components/cardShoppingCart/cardShoppingCart.component";

import { BtnBrown, HeadingH3, HeadingH4 } from "../../styled";
import { ButtonContent, CardContainer, IconClose } from "./cart.styles";

const Cart = () => {

  const { cartNavBtns } = useSelector((store) => store.activeBtn);
  const dispatch = useDispatch();

  return (
    <div>
      <HeadingH3>Shopping Cart</HeadingH3>
      <CardContainer>
        <CardShoppingCart/>
      </CardContainer>
      <ButtonContent>
        <IconClose onClick={() => dispatch(clearCart())} >
          <ion-icon size='large' name="close-outline"></ion-icon>
          <HeadingH4>Clear Cart</HeadingH4>
        </IconClose>
        <BtnBrown 
          to='/shoppingCart/address/delivery' 
          onClick={() => {
            dispatch(activeCartNavBtn(cartNavBtns.map(el => el.link)))
            dispatch(stepAccess('/shoppingCart/address'))
          }}
        >
          continue
        </BtnBrown>
      </ButtonContent>
    </div>
  )
}

export default Cart;