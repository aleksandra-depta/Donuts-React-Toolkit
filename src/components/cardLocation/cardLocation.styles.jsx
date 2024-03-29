import { styled } from "styled-components";

export const CardContainer = styled.div`
  padding: 1rem;
  margin-right: 10px;
  display: flex;
  gap: 1rem;
  min-width: 24rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};

  ${({ active, id }) =>
    active !== "" &&
    id === active &&
    `
    border: 1px solid #111111;
    border-radius: 20px
  `}
`;

export const IconPin = styled.div`
  color: ${(props) => props.theme.colors.brown};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 75%;
`;
