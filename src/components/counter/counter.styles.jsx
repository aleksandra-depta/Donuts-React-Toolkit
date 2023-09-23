import { styled } from "styled-components"

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CounterIcon = styled.button`
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterInput = styled.input`
  width: 4rem;
  text-align: center;
  font-size: 1.3rem;
  border: none;

  &:focus{
    outline: none;
  }
`;

