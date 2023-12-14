import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin: 4rem 0 16rem 0;
`;

export const BtnContent = styled.div`
  display: flex;
  gap: 8rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
