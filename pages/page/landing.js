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

export default function Landing() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(undefined);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      console.log(date);
    },
    [setOpen, setDate]
  );

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
          <InputItem placeholder="Tên của bạn là gì?" />
          <WhiteSpace />
          <WhiteSpace />

          {Platform.OS === "web" && (
            <>
              <Button onPress={() => setOpen(true)}> Ngày Sinh</Button>
              <DatePickerModal
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
              />
            </>
          )}
          {!(Platform.OS === "web") && (
            <>
              <Provider locale={enUS} theme={customTheme}>
                <WhiteSpace />
                <WhiteSpace />

                <DatePicker mode="date" format="YYYY-MM-DD">
                  <List.Item>Ngày Sinh</List.Item>
                </DatePicker>
              </Provider>
            </>
          )}
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button> Tính Ngay 👉🏻</Button>
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

  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    height: 48,
    marginBottom: 10,
    borderColor: "#dddddd",
  },
});
