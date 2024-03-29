import { keyframes } from "styled-components";

export const slideUpSmall = keyframes`
  from {
    transform: translateY(1rem);
  }
  to {
    transform: translateY(0px);
  }
`;

export const scaleUpSmall = keyframes`
  from {
    transform: scale(0.98);
  }

  to {
    transform: scale(1);
  }
`;

export const scaleUp1 = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

export const scaleUp2 = keyframes`
  from {
    scale: 1.2
  }
  to {
    scale: 1
  }
`;

export const rotate90 = keyframes`
  from {
    transform: rotate(90deg) ;
    right: -10rem;
  }
  to {
    transform: rotate(0deg) ;
    right: -1rem;
  }
`;
