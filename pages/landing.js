import * as React from "react";
import {
  WhiteSpace,
  WingBlank,
  Button,
  InputItem,
  DatePicker,
  List,
  Provider,
} from "@ant-design/react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import smartie from "../public/smartie.png";

export default function Landing() {
  return (
    <>
      <WingBlank>
        <View style={styles.imageContainer}>
          <Image source={smartie} style={styles.image} />
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <InputItem type="text" placeholder="Bạn tên gì?">
          Họ Tên
        </InputItem>
        <WhiteSpace />
        <Provider>
          <List>
            <DatePicker
              mode="date"
              defaultDate={new Date()}
              format="YYYY-MM-DD"
              minDate={new Date(2015, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
            >
              <List.Item arrow="horizontal"> Ngày Sinh</List.Item>
            </DatePicker>
          </List>
        </Provider>
        <WhiteSpace />
        <Button>Tính Ngay 👉🏻 </Button>
      </WingBlank>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  imageContainer: {
    width: "100%",
    height: 213,
    justifyContent: "center",
    alignItems: "stretch",
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: "center",
  },
});
