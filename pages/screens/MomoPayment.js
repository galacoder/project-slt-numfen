// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import NavigationButtons from "../../components/NavigationButtons";
import Layout from "../../components/Layout";
import { SpacerL, SpacerM } from "../../styles/spacing";

export default function MomoPayment({ navigation }) {
  return (
    <Layout>
      <Smartie />
      <SpacerM />
      <ContentBox text="This is Momo Payment page" />
      <SpacerL />
      <NavigationButtons
        backButtonName="Trở Lại"
        backButtonOnPress={() => navigation.navigate("Payment")}
        nextButtonName="Thanh Toán"
        nextButtonOnPress={() => navigation.navigate("Success")}
      />
    </Layout>
  );
}
