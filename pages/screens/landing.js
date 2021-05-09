// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import { TextInput } from "react-native-paper";
import ContentBox from "../../components/ContentBox";

import MyButton from "../../components/SingleButton";

export default function Landing({ navigation }) {
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState("");
  return (
    <>
      <Smartie />
      <ContentBox text="Xin chào bạn. Mình tên là Smartie. Hôm nay mình rất vui vì mình sẽ giúp bạn tìm hiểu được con người thật của bạn qua Thần Số Học." />
      <NameInput onChangeText={(text) => setText(text)} />
      <DateInput onChangeText={(date) => setDate(date)} />
      <MyButton
        name="Calculate"
        onPress={() => navigation.navigate("Result")}
      />
    </>
  );
}

const NameInput = styled(TextInput).attrs({
  label: "Tên của bạn là gì?",
  mode: "outlined",
})``;
const DateInput = styled(TextInput).attrs({
  label: "Ngày sinh của bạn?",
  mode: "outlined",
})``;
