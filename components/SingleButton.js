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
        width={props.width}
        onPress={props.onPress}
        align={props.align}
      >
        {props.name || "Button"}
      </MyButton>
    </>
  );
}

const MyButton = styled(Button)`
  width: ${(props) => props.width || "200px"};
  align-self: ${(props) => props.align || "center"};
`;
