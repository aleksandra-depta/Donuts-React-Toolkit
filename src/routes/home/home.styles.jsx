import styled from "styled-components";
import { HeadingH3 } from "../../styled";
import { scaleUp2, slideUpSmall } from "../../styledKeyframes";

export const HeadingsContainer = styled.div`
  padding: 2rem 0 1rem 0;
  text-align: end;
  color: $color-primary;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 6rem 0;
  }
`;

export const NavBackground = styled.img`
  position: absolute;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    top: -4rem;
    right: 40%;
    width: 28rem;
    transform: rotate(-80deg);
  }

  @media only screen and (max-width: 576px) {
    right: 30%;
  }
`;

export const LogoContainer = styled.img`
  width: 32rem;
  align-self: flex-end;
  transition: all 0.5s ease-in-out;
  animation: ${scaleUp2} 0.6s linear infinite;
  animation-iteration-count: 1;

  @media only screen and (max-width: 992px) {
    width: 24rem;
  }

  @media only screen and (max-width: 576px) {
    width: 20rem;
  }
`;

export const Subtitle = styled(HeadingH3)`
  color: ${(props) => props.theme.colors.brownDark};
  transition: all 0.5s ease-in-out;
  animation: ${slideUpSmall} 0.6s linear infinite;
  animation-iteration-count: 1;

  @media only screen and (max-width: 576px) {
    font-size: 1.4rem;
  }
`;
