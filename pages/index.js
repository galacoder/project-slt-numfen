// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};
export default function App() {
  return (
    <PaperProvider>
      <Container>
        <Title>Hello world from styled component</Title>
        <Smartie />
      </Container>
    </PaperProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 17px;
`;

const Smartie = styled.ImageBackground.attrs({
  source: require("../public/Smartie.jpg"),
})`
  width: 200px;
  height: 220px;
  transform: scale(0.5);
`;
