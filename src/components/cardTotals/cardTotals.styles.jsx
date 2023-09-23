import { styled } from "styled-components";

export const Totalscontainer = styled.div`
  border: 1px solid black;
  padding: 2rem;
  max-width: 27rem;

  @media only screen and (max-width: 576px) {
    max-width: 100%;
  }
`;

export const ProductsList = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const BtnPay = styled.div`
  height: 5rem;
  margin-top: 4rem;
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  padding: 2.3rem 5rem;
  border-radius: 25px 25px 0 25px;
  box-shadow: 0rem 0.3rem 0.8rem ${props => props.theme.colors.greyLight};
  width: 100%;
  margin-top: 2rem;

  &:hover {
    transform: translateY(1px);
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;
