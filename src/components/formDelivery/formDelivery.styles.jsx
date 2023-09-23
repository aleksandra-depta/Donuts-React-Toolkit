import { styled } from "styled-components";

export const FormContent = styled.div`
  padding: 2rem 8rem 4rem 1.4rem;

  @media only screen and (max-width: 992px) {
    padding: 2rem 1.4rem 4rem 1.4rem;
  }
`;

export const RowContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -15px;
  gap: 1.5rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

