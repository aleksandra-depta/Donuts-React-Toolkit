import styled from "styled-components";
import { LinkSmallGrey, TextMedium } from "../../styled";

export const FooterContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1.7fr 1.7fr 1fr 1fr 1fr;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media only screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

export const MediaLogo = styled.img`
  height: 2.5rem;

  @media only screen and (max-width: 576px) {
    height: 1.5rem;
  }
`;

export const MediaLinks = styled(LinkSmallGrey)`
  padding: 7px 0 7px 0;
`;

export const MediaIcon = styled.div`
  width: 3rem;
  color: ${(props) => props.theme.colors.grey};
  margin: 17px 0 0px 0;
`;

export const Description = styled(TextMedium)`
  margin: 17px 0 17px 0;
`;
