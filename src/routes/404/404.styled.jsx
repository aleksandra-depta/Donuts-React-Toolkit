import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
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
