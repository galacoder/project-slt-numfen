// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";

export default function ContentBox(props) {
  return (
    <>
      <Content>{props.text || "Hello world from landing"}</Content>
    </>
  );
}

const Content = styled.Text`
  font-size: 17px;
`;
