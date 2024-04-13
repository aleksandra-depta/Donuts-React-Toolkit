import { Link } from "react-router-dom";
import styled from "styled-components";

export const COLORS = {
  white: "#fbfaf9",
  whiteTransp: "#edeae75f",
  pureWhite: "#ffffff",

  black: "#111111",
  blackTransp: "#0e0e0e57",
  grey: "#6b6464",
  greyLight: "#d1cfcb",

  brownDark: "#37110f",
  brown: "#9e6d3f",
  brownLight: "#e0d7ce",
};

export const HeadingH1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;

  @media only screen and (max-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const HeadingH1Brown = styled(HeadingH1)`
  color: ${(props) => props.theme.colors.brown};
`;

export const HeadingH3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const HeadingH3Brown = styled(HeadingH3)`
  color: ${(props) => props.theme.colors.brown};
`;

export const HeadingH4 = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const TextMedium = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3;
`;

export const TextSmall = styled.div`
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.5;
`;

//Links
export const BtnShoppingCart = styled(Link)`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border-radius: 1.2rem 1.2rem 5rem 1.2rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  width: 4.5rem;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    color: ${(props) => props.theme.colors.white};
  }
`;

export const BtnBlack = styled(Link)`
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  padding: 2.3rem 5rem;
  border-radius: 25px 25px 0 25px;
  box-shadow: 0rem 0.3rem 0.8rem ${(props) => props.theme.colors.greyLight};
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`;

export const BtnBrown = styled(BtnBlack)`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.brownDark};
  min-width: 13rem;
`;

export const BtnBrownLight = styled(BtnBrown)`
  background-color: ${(props) => props.theme.colors.brown};
`;

export const BtnBlackSmall = styled(BtnBlack)`
  padding: 0.7rem 1.5rem;
  font-size: 1.3rem;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const BtnBrownSmall = styled(BtnBlackSmall)`
  background-color: ${(props) => props.theme.colors.brown};
`;

export const BtnBrownDarkSmall = styled(BtnBlackSmall)`
  background-color: ${(props) => props.theme.colors.brownDark};
`;

export const BtnInactiveSmall = styled.div`
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.brownLight};

  box-shadow: 0rem 0.3rem 0.8rem ${(props) => props.theme.colors.greyLight};
  text-align: center;
  padding: 0.7rem 1.5rem;
  font-size: 1.3rem;
  border-radius: 40px;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`;

export const LinkSmallGrey = styled(Link)`
  color: ${(props) => props.theme.colors.grey};
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;
