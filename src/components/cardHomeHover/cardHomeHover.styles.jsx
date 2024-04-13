import styled from "styled-components";
import { BtnBlackSmall } from "../../styled";
import { scaleUpSmall } from "../../styledKeyframes";

export const CardContainer = styled.div`
  padding: 1rem;
  margin: 25px 0px 35px 0px;
  background-color: ${(props) => props.theme.colors.brownLight};
  box-shadow: 0 1rem 1rem ${(props) => props.theme.colors.blackTransp};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  animation: ${scaleUpSmall} 0.2s linear infinite;
  animation-iteration-count: 1;

  @media only screen and (max-width: 1200px) {
    min-width: 16rem;
    background-color: ${(props) => props.theme.colors.white};
  }

  @media only screen and (max-width: 768px) {
    margin: 55px 0px 35px 0px;
  }

  @media only screen and (max-width: 576px) {
    width: 90%;
    margin: 55px 20px 35px 20px;
  }
`;

export const Image = styled.img`
  height: 11rem;
  @media only screen and (max-width: 576px) {
    height: 16rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;

  @media only screen and (max-width: 576px) {
  }
`;

export const Button = styled(BtnBlackSmall)`
  width: 100%;
`;

export const PriceContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
