import styled from "styled-components";
import { BtnShoppingCart } from "../../styled";

export const Card = styled.div`
  min-width: 16rem;
  height: 16.7rem;
  margin: 130px 0px 150px 0px;
  padding: 25px 10px 45px 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0.5rem 0.9rem ${(props) => props.theme.colors.blackTransp};
  border-radius: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  text-align: center;
  cursor: pointer;

  @media only screen and (max-width: 576px) {
    margin: 180px 20px 150px 20px;
  }
`;

export const ImageCard = styled.img`
  height: 10rem;
  margin-top: -6rem;

  @media only screen and (max-width: 576px) {
    height: 16rem;
    margin-top: -13rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconShoppingCart = styled(BtnShoppingCart)`
  position: absolute;
  right: 1.8rem;
  bottom: -2.5rem;
`;

export const IconShoppingCartActive = styled(IconShoppingCart)`
  background-color: ${(props) => props.theme.colors.brown};
`;

export const ActiveBtn = styled.img`
  width: 30px;
  position: absolute;
  top: 5px;
  left: 35%;
`;
