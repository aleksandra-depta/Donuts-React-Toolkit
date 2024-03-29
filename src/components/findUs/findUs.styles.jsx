import styled from "styled-components";
import { rotate90, scaleUp2, scaleUp1 } from "../../styledKeyframes";

export const FindUsContainer = styled.div`
  padding: 12rem 0 6rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media only screen and (max-width: 768px) {
    margin-top: 10rem;
  }
`;

export const Text = styled.div`
  transition: all 0.5s ease-in-out;
  animation: ${scaleUp2} 0.6s linear infinite;
  animation-iteration-count: 1;
`;

export const Btn = styled.div`
  margin-top: 2rem;
  transition: all 0.5s ease-in-out;
  animation: ${scaleUp1} 0.5s linear infinite;
  animation-iteration-count: 1;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 6rem;
  right: -1rem;
  width: 30rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(-60deg);
  }

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

  @media only screen and (min-width: 768px) {
    animation: ${rotate90} 0.5s linear infinite;
    animation-iteration-count: 1;
  }
`;
