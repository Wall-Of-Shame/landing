import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#6C7BFF"};
  color: #ffffff;
  font-size: 1rem;
  font-weight: 1000;
  width: 100%;
  border: 1px solid ${(p) => p.color || "#6C7BFF"};
  border-radius: 10px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 30px rgb(23 31 114 / 10%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid ${(p) => p.focusColor || "#55BBDA"};
    background-color: ${(p) => p.focusColor || "#55BBDA"};
  }
`;
