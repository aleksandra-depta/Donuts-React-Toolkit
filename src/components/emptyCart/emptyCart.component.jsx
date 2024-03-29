import { scrollToTop } from "../../features/scrollToTop";

import { BtnBlack, HeadingH1Brown } from "../../styled";
import { BtnContent, Container, Heading, Btn } from "./emptyCart.styles";

const EmptyCart = () => {
  return (
    <Container>
      <Heading>
        <HeadingH1Brown>Your cart is empty</HeadingH1Brown>
      </Heading>
      <BtnContent>
        <Btn to="/" onClick={() => scrollToTop()}>
          Home
        </Btn>
        <Btn to="/menu" onClick={() => scrollToTop()}>
          Check menu
        </Btn>
      </BtnContent>
    </Container>
  );
};

export default EmptyCart;
