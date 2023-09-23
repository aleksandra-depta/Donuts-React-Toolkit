import styled from 'styled-components';

export const SearchForm = styled.form`
  flex: 0 0 63%;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-right: -3rem;
  padding: 0.7rem 4rem 0.7rem 1rem;
  font-family: inherit;
  text-align: right;
  font-size: 1.7rem;
  color: ${props => props.theme.colors.grey};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  transition: all 0.2s;
  
  &:focus {
    width: 90%;
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.black};
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(1px);
  }
`;

export const IconClose = styled.div`
  cursor: pointer;
`;