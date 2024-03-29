import { styled } from "styled-components";

export const FilteredContainer = styled.div`
  margin: 14rem 0 2rem 0;

  @media only screen and (max-width: 992px) {
    margin-top: 4rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonContent = styled.div`
  margin: 5rem 1rem;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 5rem;
  }
`;

export const IconClose = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
  cursor: pointer;
`;
