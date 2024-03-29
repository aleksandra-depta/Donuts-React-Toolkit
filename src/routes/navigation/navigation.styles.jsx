import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  padding-top: 7rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 6rem;

  @media only screen and (max-width: 768px) {
    gap: 2rem;
    padding-top: 3rem;
  }
`;

export const LinksContainerLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const LinksContainerRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 6rem;

  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const LogoContainer = styled.img`
  height: 4rem;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.black};
    transform: translateY(-2px);
  }
`;

export const IconMenu = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
  padding-top: 8px;
  transition: all 0.2s ease-in-out;
  font-size: 2.8rem;

  &:hover {
    color: ${(props) => props.theme.colors.black};
    transform: translateY(-2px);
  }
`;

export const IconHome = styled.img`
  width: 3rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const TotalAmount = styled.div`
  background-color: ${(props) => props.theme.colors.brown};
  position: absolute;
  min-width: 35px;
  min-height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  bottom: 0;
  right: -10px;
`;

export const NavBackground = styled.img`
  position: absolute;
  top: -25rem;
  right: 50%;
  transform: translateX(50%);
  max-height: 62rem;
  z-index: -2;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
