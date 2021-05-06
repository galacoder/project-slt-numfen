import * as React from "react";
import styled from "styled-components/native";

export default function Result({ navigation }) {
  return (
    <>
      <Title>This is result page</Title>
      <LandingButton
        title="Back to Landing"
        onPress={() => navigation.navigate("Landing")}
      />
    </>
  );
}

const Title = styled.Text``;
const LandingButton = styled.Button``;
