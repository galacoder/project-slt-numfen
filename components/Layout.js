import React from "react";
import styled from "styled-components/native";

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;
