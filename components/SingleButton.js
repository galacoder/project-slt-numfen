// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

export default function SingleButton(props) {
  return (
    <>
      <MyButton
        icon={props.iconName || "camera"}
        mode={props.modeName || "contained"}
      >
        {props.name || "Button"}
      </MyButton>
    </>
  );
}

const MyButton = styled(Button)`
  width: 200px;
`;
