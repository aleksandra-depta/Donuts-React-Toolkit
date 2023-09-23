import { styled } from "styled-components";
import { BtnBrown } from "../../styled";

export const LocationContainer = styled.div`
  margin: 14rem 0 10rem 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media only screen and (max-width: 992px) {
    margin-top: 4rem;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 60vh;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  justify-content: space-between;
  padding: 0 0 20px 0;

  @media only screen and (max-width: 992px) {
    justify-content: flex-start;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const CardsContainer = styled.div`
  height: 80vh;
  overflow-y: scroll;

  @media only screen and (max-width: 992px) {
    height: 50vh;
  }
`;

export const Button = styled(BtnBrown)`
  padding: 15px 40px;
`;
