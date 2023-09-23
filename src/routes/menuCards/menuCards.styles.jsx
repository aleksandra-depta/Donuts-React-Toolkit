import { styled } from "styled-components";

export const Content = styled.div`
  margin: 2rem 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
