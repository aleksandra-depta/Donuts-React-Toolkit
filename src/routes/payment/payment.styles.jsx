import { styled } from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-right: 8rem;

  @media only screen and (max-width: 992px) {
    margin-right: 0rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const RowContent = styled.div`
  background-color: ${props => props.theme.colors.brownLight};
  padding: 2rem;
  border-radius: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  &::after{
  content: '';
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  bottom: -10px;
  }
`;
