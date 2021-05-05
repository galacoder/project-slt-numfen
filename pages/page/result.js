import * as React from "react";
import {
  WingBlank,
  WhiteSpace,
  InputItem,
  List,
  Provider,
  DatePicker,
  Button,
  Modal,
  DatePickerView,
} from "@ant-design/react-native";
import { Text, StyleSheet, Platform, SafeAreaView } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";

import enUS from "@ant-design/react-native/lib/locale-provider/en_US";
import customTheme from "../../styles/customTheme";

import Smartie from "../components/Smartie";
import AppBar from "../components/AppBar";

export default function Result() {
  return (
    <>
      <SafeAreaView>
        <AppBar />
        <WingBlank style={styles.container}>
          <Smartie />
          <WhiteSpace />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
  },
});
