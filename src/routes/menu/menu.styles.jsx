import { styled } from "styled-components";
import { BtnBrown } from "../../styled";

export const MenuLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 14rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 4rem;
  }
`;

export const MenuLink = styled(BtnBrown)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  ${({ active, to }) => active !== '' && window.location.pathname === to && `
    background: #9e6d3f;
  `}
`;
