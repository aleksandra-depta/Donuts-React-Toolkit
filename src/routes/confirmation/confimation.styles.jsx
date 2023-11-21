import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 3rem 6rem;
  height: 60vh;

  @media only screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem 0;
`;

export const LogoContainer = styled.img`
  width: 18rem;
`;

export const ButtonsContainer = styled.div`
  margin-top: 5rem;
`;
