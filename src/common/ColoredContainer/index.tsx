import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const ColoredContainer = ({ border, children }: ContainerProps) => (
  <StyledContainer border={border}>{children}</StyledContainer>
);

export default ColoredContainer;
