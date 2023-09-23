import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

export const NavStepsConatainer = styled.div`
  margin-top: 14rem;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 992px) {
    margin-top: 4rem;
  }
`;

const step = css`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.greyLight};
  box-shadow: 0 1rem 1rem ${props => props.theme.colors.greyLight};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:not(:last-child):after {
    content: "";
    background-color: ${props => props.theme.colors.greyLight};
    height: 2px;
    width: 11rem;
    position: absolute;
    top: 50%;
    left: 6rem;

    @media only screen and (max-width: 768px) {
      width: 3rem;
    }
    @media only screen and (max-width: 576px) {
      display: none;
    }
  }
`

export const Number = styled(Link)`
  ${step};

  &:active, &:hover{
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }

  ${({ active, link }) => active !== '' && window.location.pathname.startsWith(link) &&  `
    background: #111111;
    color: #fbfaf9;
  `}
`;

export const InActiveNumber = styled.div`
  ${step};
`;