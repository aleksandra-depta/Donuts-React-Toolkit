import styled from 'styled-components';

export const FindUsContainer = styled.div`
  padding: 12rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 6rem;
  right: -1rem;
  width: 30rem;

  @media only screen and (max-width: 992px) {
    width: 20rem;
    right: 1rem;
    top: 8rem;
  }
  @media only screen and (max-width: 768px) {
    width: 16rem;
    left: 50%;
    transform: translateX(-50%);
    top: -3rem;
  }
`;