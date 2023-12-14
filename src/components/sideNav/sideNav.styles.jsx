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
  gap: 2rem;
`;

export const IconClose = styled.div`
  text-align: end;
  cursor: pointer;
`;

export const LogoContainer = styled.img`
  width: 100%;
`;
