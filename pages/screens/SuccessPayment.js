// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import { SpacerL, SpacerM } from "../../styles/spacing";
import Layout from "../../components/Layout";

export default function SuccessPaid({ navigation }) {
  return (
    <Layout>
      <Smartie />
      <SpacerM />
      <ContentBox text="This is Sucessful payment page" />
      <SpacerL />
      <SingleButton
        name="Tạo Tài Khoản"
        onPress={() => navigation.navigate("Main")}
      />
    </Layout>
  );
}
