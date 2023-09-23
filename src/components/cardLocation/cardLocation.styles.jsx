import { styled } from "styled-components";

export const CardContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  background-color: red;
  background-color: ${props => props.theme.colors.brownLight};
  border-radius: 30px;
  min-width: 24rem;

  ${({ active, id }) => active !== '' && id === active && `
    border: 1px solid #9e6d3f;
    background: #fbfaf9
  `}
`;

export const IconPin = styled.div`
  color:${props => props.theme.colors.brown};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 75%;
`;
