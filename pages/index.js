// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Landing from "./screens/landing";
import AppBar from "../components/AppBar";

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
        <AppBar />
        <Landing />
      </Container>
    </PaperProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
