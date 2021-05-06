// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";

export default function Landing({ navigation }) {
  return (
    <>
      <Title>Hello world from landing</Title>
      <Smartie />
      <ResultButton
        title="Next page"
        onPress={() => navigation.navigate("Result")}
      />
    </>
  );
}

const Title = styled.Text`
  font-size: 17px;
`;

const ResultButton = styled.Button``;
