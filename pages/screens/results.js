import * as React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

export default function Result({ navigation }) {
  return (
    <>
      <Title>This is result page</Title>
      <LandingButton onPress={() => navigation.navigate("Landing")}>
        Back Home
      </LandingButton>
    </>
  );
}

const Title = styled.Text``;
const LandingButton = styled(Button).attrs({
  icon: "camera",
  mode: "contained",
})``;
