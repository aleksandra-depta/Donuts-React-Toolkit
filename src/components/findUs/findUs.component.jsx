import { scrollToTop } from "../../features/scrollToTop";
import { BtnBlack, HeadingH1 } from "../../styled";
import { FindUsContainer, Btn, Image, Text } from "./findUs.styles";
import Donut from "../../img/donutSmall.png";

const FindUs = ({ isIntersecting }) => {
  return (
    <FindUsContainer>
      {isIntersecting && (
        <>
          <Text>
            <HeadingH1>Where to find us</HeadingH1>
          </Text>
          <Btn>
            <BtnBlack to="/locations" onClick={() => scrollToTop()}>
              View our locations <span>&rarr;</span>
            </BtnBlack>
          </Btn>
          <Image src={Donut} alt="Donut Image" loading="lazy" />
        </>
      )}
    </FindUsContainer>
  );
};

export default FindUs;
