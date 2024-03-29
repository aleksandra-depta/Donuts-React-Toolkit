import { styled } from "styled-components";
import { slideUpSmall } from "../../styledKeyframes";
import { BtnBlack } from "../../styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin: 4rem 0 16rem 0;
`;

export const Heading = styled.div`
  transition: all 0.2s ease-in-out;
  animation: ${slideUpSmall} 1s;
`;

export const BtnContent = styled.div`
  display: flex;
  gap: 8rem;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Btn = styled(BtnBlack)`
  &:first-child {
    animation: ${slideUpSmall} 1s 0.1s;
  }
  &:nth-child(2) {
    animation: ${slideUpSmall} 1s 0.2s;
  }
`;
