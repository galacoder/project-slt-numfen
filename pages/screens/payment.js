// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";
import Layout from "../../components/Layout";
import { SpacerS, SpacerM, SpacerL } from "../../styles/spacing";
export default function Payment({ navigation }) {
  return (
    <Layout>
      <Smartie />
      <SpacerM />
      <ContentBox text="This is Main Payment page" />
      <SpacerL />
      <SingleButton name="Momo" onPress={() => navigation.navigate("Momo")} />
      <SpacerM />
      <SingleButton name="Thẻ" onPress={() => navigation.navigate("Baokim")} />
      <SpacerM />
      <SingleButton
        name="Thanh Toán Thất Bại"
        onPress={() => navigation.navigate("Failure")}
      />
    </Layout>
  );
}
