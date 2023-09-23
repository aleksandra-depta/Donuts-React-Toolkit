import { scrollToTop } from "../../features/scrollToTop/scrollToTop";

import { BtnBlack, HeadingH1 } from "../../styled";
import { FindUsContainer, Image } from "./findUs.styles";

import Donut from "../../img/donut.png";

const FindUs = () => {

  return (
    <FindUsContainer>
      <HeadingH1>Where to find us</HeadingH1>
      <BtnBlack to='/locations' onClick={() => scrollToTop()}>
        View our locations <span>&rarr;</span>
      </BtnBlack>
      <Image src={ Donut } alt="Donut Image" />
    </FindUsContainer>
  )
}

export default FindUs;