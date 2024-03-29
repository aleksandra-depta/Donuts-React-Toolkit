import styled from "styled-components";
import { BtnBlackSmall } from "../../styled";

export const CardComponent = styled.div`
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.brownLight};
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  gap: 2rem;

  @media only screen and (max-width: 576px) {
    border-radius: 20px;
  }
`;

export const LogoContainer = styled.img`
  width: 6rem;
`;

export const CardDescription = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 576px) {
    gap: 4px;
  }
`;

export const CardBottom = styled.div`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuLink = styled(BtnBlackSmall)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  height: 14rem;
  border-radius: 20%;

  @media only screen and (max-width: 576px) {
    height: 10rem;
  }
`;
