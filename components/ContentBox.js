// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import { Caption } from "../styles/fonts";

export default function ContentBox(props) {
  return (
    <>
      <Content>{props.text || "Hello world from landing"}</Content>
    </>
  );
}

const Content = styled(Caption)``;
