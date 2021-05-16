// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import { TextInput } from "react-native-paper";
import ContentBox from "../../components/ContentBox";

import SingleButton from "../../components/SingleButton";
import { SpacerS, SpacerM, SpacerL } from "../../styles/spacing";
import Layout from "../../components/Layout";
import { Caption } from "../../styles/fonts";
import { DatePickerModal } from "react-native-paper-dates";
import moment from "moment";

export default function Landing({ navigation }) {
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState("");

  const [open, setOpen] = React.useState(false);

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
    <Layout>
      <Smartie />
      <ContentBox text="Xin chào bạn. Mình tên là Smartie. Hôm nay mình rất vui vì mình sẽ giúp bạn tìm hiểu được con người thật của bạn qua Thần Số Học." />
      <SpacerM />
      <NameInput onChangeText={(text) => setText(text)} />
      <SpacerS />
      <DateInput
        onFocus={() => setOpen(true)}
        value={date === "" ? "" : moment(date).format("DD/MM/YYYY")}
      />
      <DatePickerModal
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        saveLabel="Chọn"
        label="Chọn Ngày"
      />
      <SpacerL />
      <SingleButton
        name="Xem Kết Quả  Ngay"
        onPress={() => navigation.navigate("Result")}
      />
      <SpacerM />

      <LoginButton onPress={() => navigation.navigate("Main")}>
        <Title>Bạn đã có tài khoản?</Title>
      </LoginButton>
    </Layout>
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

const LoginButton = styled.TouchableOpacity`
  width: "100%";
  height: "32px";
`;

const Title = styled(Caption)`
  color: gray;
  text-align: center;
`;
