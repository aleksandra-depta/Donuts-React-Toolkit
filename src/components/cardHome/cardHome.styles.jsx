import styled from 'styled-components';
import { BtnShoppingCart } from '../../styled';

export const Card = styled.div`
  min-width: 18rem;
  height: 16.7rem;
  margin: 130px 25px 150px 25px;
  padding: 25px 20px 45px 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0.5rem 0.9rem ${props => props.theme.colors.greyLight};
  border-radius: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  text-align: center;
  cursor: pointer;
`;

export const ImageCard = styled.img`
  height: 10rem;
  margin-top: -6rem;
`;

export const IconShoppingCart = styled(BtnShoppingCart)`
  position: absolute;
  right: 1.8rem;
  bottom: -2.5rem;
`;

export const IconShoppingCartActive = styled(IconShoppingCart)`
  background-color:  ${props => props.theme.colors.brown};
`;

export const ActiveBtn = styled.img`
  width: 30px;
  position: absolute;
  top: 5px;
  left: 35%;
`;
