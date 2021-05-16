// @generated: @expo/next-adapter@2.1.52
import React from "react";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import { SpacerL, SpacerM } from "../../styles/spacing";
import Layout from "../../components/Layout";
import SingleButton from "../../components/SingleButton";

export default function Profile({ navigation }) {
  return (
    <Layout>
      <Smartie />
      <SpacerM />
      <ContentBox text="This is Profile page" />
      <SpacerL />
      <SingleButton
        name="Đăng Xuât"
        onPress={() => navigation.navigate("Landing")}
      />
    </Layout>
  );
}
