import styled from 'styled-components';
import { BtnBlackSmall } from '../../styled';

export const CardContainer = styled.div`
  padding: 1rem;
  margin: 0px 15px 35px 15px;
  background-color: ${props => props.theme.colors.brownLight};
  box-shadow: 0 1rem 1rem ${props => props.theme.colors.greyLight};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  z-index: 1000;
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