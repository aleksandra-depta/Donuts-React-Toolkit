import { styled } from "styled-components";
import { BtnBrown } from "../../styled";

export const NavBtns = styled.div`
  margin-top: -1.3rem;
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
`;

export const FormContent = styled.div`
  padding: 2rem 8rem 4rem 1rem;

  @media only screen and (max-width: 992px) {
    padding: 0rem;
  }
`;

export const RowContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -15px;
  gap: 1.5rem;
`;

export const AddressBtn = styled.div`
  margin-right: 9rem;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 992px) {
    margin-right: 1rem;
  }
`;

export const Button = styled(BtnBrown)`
  ${({ active, to }) => active !== '' && window.location.pathname === to && `
    background: #9e6d3f;
  `}
`

export const FormButton = styled.button`
  min-width: 13rem;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: ${props => props.theme.colors.brownDark};
  color: ${props => props.theme.colors.white};
  border-radius: 25px 25px 0 25px;
  border: none;
  box-shadow: 0rem 0.3rem 0.8rem ${props => props.theme.colors.greyLight};
  text-align: center;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    transform: translateY(1px);
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;


