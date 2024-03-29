import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavContainer = styled.div`
  background-color: rgba(17, 17, 17, 0.2);
  z-index: 5000;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 2.6fr;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyDiv = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 1rem ${(props) => props.theme.colors.grey};
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const IconClose = styled.div`
  text-align: end;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const LogoContainer = styled.img`
  width: 80%;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Btn = styled(Link)`
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey};
  font-size: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  padding: 2rem;
  transition: all 0.2s ease-in-out;

  &:first-child {
    margin-top: 2rem;
    border-top: 1px solid ${(props) => props.theme.colors.grey};
  }
  &:hover {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.black};
  }
`;
