import styled from "styled-components";
import { BtnBrown } from "../../styled";
import { slideUpSmall } from "../../styledKeyframes";

export const MenuLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 14rem;

  @media only screen and (max-width: 992px) {
    margin-top: 4rem;
    gap: 8px;
  }
`;

export const MenuLink = styled(BtnBrown)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  ${({ active, to }) =>
    active !== "" &&
    window.location.pathname === to &&
    `
    background: #9e6d3f;
  `}

  &:first-child {
    animation: ${slideUpSmall} 1s;
  }
  &:nth-child(2) {
    animation: ${slideUpSmall} 1s 0.1s;
  }
  &:nth-child(3) {
    animation: ${slideUpSmall} 1s 0.2s;
  }
  &:nth-child(4) {
    animation: ${slideUpSmall} 1s 0.3s;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 768px) {
    padding: 4px 14px;
    min-width: max-content;
    font-size: 1.3rem;
  }
`;

export const Icon = styled.span`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
