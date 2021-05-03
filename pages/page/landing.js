import React from "react";
import {
  WingBlank,
  WhiteSpace,
  InputItem,
  List,
  Provider,
  DatePicker,
  Button,
} from "@ant-design/react-native";
import { Text, View, Image, StyleSheet, Platform } from "react-native";
import smartie from "../../public/smartie.png";
import enUS from "@ant-design/react-native/lib/locale-provider/en_US";
import customTheme from "../../styles/customTheme";

export default function Landing() {
  return (
    <>
      <WingBlank style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={smartie} style={styles.image} />
        </View>
        <WhiteSpace />
        <Text style={styles.text}>
          Welcome to Sang Le Tech App Numerology App from landing page. I want
          to show Yunnie how cool 👋
        </Text>
        <WhiteSpace />
        <WhiteSpace />
        <Provider locale={enUS} theme={customTheme}>
          <InputItem placeholder="Tên của bạn là gì?" />
          <WhiteSpace />
          <WhiteSpace />

          <DatePicker mode="date" format="YYYY-MM-DD">
            <List.Item>Ngày Sinh</List.Item>
          </DatePicker>

          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button> Tính Ngay 👉🏻</Button>
        </Provider>
      </WingBlank>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  imageContainer: {
    width: 100,
    height: 183,
  },
  image: {
    width: 128,
    height: 128,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    height: 48,
    marginBottom: 10,
    borderColor: "#dddddd",
  },
});
