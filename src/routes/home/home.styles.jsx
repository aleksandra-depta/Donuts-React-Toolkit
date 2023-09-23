import styled from 'styled-components';
import { HeadingH3 } from '../../styled';

export const HeadingsContainer = styled.div`
  padding: 2rem 0 1rem 0;
  text-align: end;
  color: $color-primary;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoContainer = styled.img`
  width: 32rem;
  align-self: flex-end;
`;

export const Subtitle = styled(HeadingH3)`
  color: ${props => props.theme.colors.brownDark}
`;
