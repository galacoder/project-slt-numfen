import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import smartie from "../../public/smartie.jpg";

export default function Smartie() {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={smartie} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 168,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
