import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

const positionVariants = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const space = ["0px", "4px", "8px", "16px", "32px", "64px"];

const getVariant = (position, size, space) => {
  const sizeIndex = sizeVariants[size];
  const property = positionVariants[position];
  const value = space[sizeIndex];

  return `${property}: ${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const variant = getVariant(position, size, space);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
