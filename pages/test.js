// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    // </View>
    <Container>
      <Title>Hello world from Test</Title>
      <Smartie />
    </Container>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 16,
//   },
// });
