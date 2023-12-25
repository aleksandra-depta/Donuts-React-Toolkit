import { BtnBlack, HeadingH1 } from "../../styled";
import { Container, NavBackground } from "./404.styled";
import Donut from "../../img/donut.png";

const Page404 = () => {
  return (
    <Container>
      <NavBackground src={Donut} alt="Donut Background Image" />
      <HeadingH1>Page not found</HeadingH1>
      <BtnBlack to="/">Go to homepage</BtnBlack>
    </Container>
  );
};

export default Page404;
