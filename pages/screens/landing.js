// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import { Button, TextInput } from "react-native-paper";
import ContentBox from "../../components/ContentBox";

export default function Landing({ navigation }) {
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState("");
  return (
    <>
      <Smartie />
      <ContentBox text="This is landing page" />
      <NameInput onChangeText={(text) => setText(text)} />
      <DateInput onChangeText={(date) => setDate(date)} />
      <CalculateButton onPress={() => navigation.navigate("Result")}>
        Calculate
      </CalculateButton>
    </>
  );
}

const CalculateButton = styled(Button).attrs({
  icon: "camera",
  mode: "contained",
})`
  width: 200px;
`;

const NameInput = styled(TextInput).attrs({
  label: "Tên của bạn là gì?",
  mode: "outlined",
})``;
const DateInput = styled(TextInput).attrs({
  label: "Ngày sinh của bạn?",
  mode: "outlined",
})``;
