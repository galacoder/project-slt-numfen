// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import { Button } from "react-native-paper";

export default function Landing({ navigation }) {
  return (
    <>
      <Title>Hello world from landing</Title>
      <Smartie />
      <ResultButton onPress={() => navigation.navigate("Result")}>
        Calculate
      </ResultButton>
    </>
  );
}

const Title = styled.Text`
  font-size: 17px;
`;

const ResultButton = styled(Button).attrs({
  icon: "camera",
  mode: "contained",
})`
  width: 200px;
`;
