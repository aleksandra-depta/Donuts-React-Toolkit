import { styled } from "styled-components";

export const LabelForm = styled.label`
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const InputForm = styled.input`
  padding: 1rem;
  margin: 0.5rem 0;
  border: 5px solid ${props => props.theme.colors.brownLight};
  border-radius: 30px;
  font-weight: 600;
  width: 22rem;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  &:active, &:focus-visible{
    border: 5px solid ${props => props.theme.colors.brown};
    outline: none;
  }
`;

export const Message = styled.div`
  height: 0.8rem;
  margin-left: 1.6rem;
  color: red;
  font-weight: 500;
  font-size: 1rem;
`;
