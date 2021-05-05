// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { StyleSheet, View } from "react-native";
import Landing from "./page/landing";

export default function App() {
  return (
    <View style={styles.container}>
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
