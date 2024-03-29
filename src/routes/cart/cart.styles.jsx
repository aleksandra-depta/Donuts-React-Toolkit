import { styled } from "styled-components";

export const CardContainer = styled.div`
  margin: 3rem 3rem 0 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.grey};

  @media only screen and (max-width: 576px) {
    margin: 3rem 0 0 0;
  }
`;

export const ButtonContent = styled.div`
  margin: 5rem 3rem 3rem 0;
  display: flex;
  justify-content: space-between;
`;

export const IconClose = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
  cursor: pointer;
`;
