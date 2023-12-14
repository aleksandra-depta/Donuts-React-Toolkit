import { styled } from "styled-components";

export const CardDetailsContainer = styled.div`
  background-color: rgba(17, 17, 17, 0.2);
  z-index: 5000;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Content = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.brownLight};
  box-shadow: 0 0 1rem ${(props) => props.theme.colors.grey};
  border-radius: 70px;
  width: 75rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1.3fr;

  @media only screen and (max-width: 992px) {
    width: 80vw;
    grid-template-columns: 1fr 2fr;
  }
  @media only screen and (max-width: 768px) {
    width: 70vw;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 576px) {
    width: 80vw;
    padding: 3rem;
  }
`;

export const IconClose = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    top: -20rem;
  }
  @media only screen and (max-width: 576px) {
    top: -18rem;
    right: 2rem;
  }
`;

export const Image = styled.img`
  width: 27rem;
  border-radius: 50px;

  @media only screen and (max-width: 992px) {
    width: 20rem;
    margin-right: 3rem;
  }
`;

export const Description = styled.div`
  position: relative;
  padding: 0 3rem;
  text-align: left;

  @media only screen and (max-width: 768px) {
    padding: 3rem 0 0 0;
  }

  &::before {
    content: "";
    width: 1px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.grey};
    position: absolute;
    top: 0;
    left: 0px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const RowConent = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

export const PriceContent = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const LogoContainer = styled.img`
  width: 10rem;
`;
