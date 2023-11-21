import styled from "styled-components";
import { BtnBlackSmall } from "../../styled";

export const CardContainer = styled.div`
  padding: 1rem;
  margin: 25px 10px 35px 20px;
  background-color: ${(props) => props.theme.colors.brownLight};
  box-shadow: 0 1rem 1rem ${(props) => props.theme.colors.greyLight};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  z-index: 1000;

  @media only screen and (max-width: 1200px) {
    width: 210px;
  }

  @media only screen and (max-width: 576px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  height: 11rem;
`;

export const Button = styled(BtnBlackSmall)`
  width: 100%;
`;

export const PriceContent = styled.div`
  display: flex;
  align-items: center;
`;
