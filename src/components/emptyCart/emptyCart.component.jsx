import { scrollToTop } from "../../features/scrollToTop/scrollToTop";

import { BtnBlack, HeadingH1Brown } from "../../styled";
import { BtnContent, Container } from "./emptyCart.styles";

const EmptyCart = () => {

  return (
    <Container>
      <HeadingH1Brown>Your cart is empty</HeadingH1Brown>
      <BtnContent>
        <BtnBlack to='/' onClick={() => scrollToTop()}>Home</BtnBlack>
        <BtnBlack to='/menu' onClick={() => scrollToTop()}>Check menu</BtnBlack>
      </BtnContent>
    </Container>
  )
}

export default EmptyCart;