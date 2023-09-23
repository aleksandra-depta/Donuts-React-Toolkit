import { styled } from "styled-components";

export const CardShoppingCartContainer = styled.div`
  padding: 1.5rem 3rem 1.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.grey};

  &:nth-child(odd){
    background-color: ${props => props.theme.colors.white};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PriceConent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media only screen and (max-width: 576px) {
    margin-left: -5rem;
  }
`;

export const RowContent = styled.div`
  display: flex;
  align-items: center;
`;

export const IconBin = styled.div`
  color: ${props => props.theme.colors.grey};
  cursor: pointer;
`;

export const ProductImage = styled.img`
  height: 8rem;
  border-radius: 20%;

  @media only screen and (max-width: 992px) {
    height: 6rem;
  }
  @media only screen and (max-width: 576px) {
    height: 3rem;
    align-self: start;
  }
`;

