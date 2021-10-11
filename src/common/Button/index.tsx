import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  focusColor,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton color={color} focusColor={focusColor} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
