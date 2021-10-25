import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  background-color: #fff7f0;
  position: relative;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0 0 10%;

  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0 0 4rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0 0 3rem;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0 0 18px;
  }
`;
