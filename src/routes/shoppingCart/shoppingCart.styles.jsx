import { styled } from "styled-components";

export const Content = styled.div`
  margin: 6rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const TotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media only screen and (max-width: 992px) {
    order: -1;
    margin-bottom: 8rem;
  }
`;
