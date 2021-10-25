import styled from "styled-components";

export const IntroSection = styled("section")`
  padding: 4rem 0 0rem;
  background-color: #fff7f0;

  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 0rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Poppins Regular", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: left;
  max-width: 100%;
  padding-bottom: 4rem;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }

  button:first-child {
    margin-right: 20px;
  }
`;
