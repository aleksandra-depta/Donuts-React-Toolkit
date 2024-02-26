import { useSelector } from "react-redux";
import Footer from "../../components/footer/footer.component";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";

import { BtnBlack, HeadingH1Brown, HeadingH3, HeadingH4 } from "../../styled";
import {
  ButtonsContainer,
  Container,
  Content,
  LogoContainer,
} from "./confimation.styles";

import Logo from "../../img/logo.png";

const Confirmation = () => {
  const { activeInputSearch } = useSelector((store) => store.cart);

  return (
    <div>
      {activeInputSearch ? (
        <SearchBarResults />
      ) : (
        <>
          <Container>
            <Content>
              <HeadingH1Brown>Thank you</HeadingH1Brown>
              <HeadingH3>We have received your order</HeadingH3>
              <LogoContainer src={Logo} alt="Don'nuts logo" loading="lazy" />
              <HeadingH4>Donuts Team</HeadingH4>
              <ButtonsContainer>
                <BtnBlack to="/menu">Check Menu</BtnBlack>
              </ButtonsContainer>
            </Content>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Confirmation;
