// @generated: @expo/next-adapter@2.1.52
import React from "react";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import { SpacerL, SpacerM } from "../../styles/spacing";
import Layout from "../../components/Layout";
import MessageBox from "../../components/MessageBox";
import { ScrollView } from "react-native";

export default function Motivation({ navigation }) {
  return (
    <Layout>
      <ScrollView style={{ indicatorStyle: "white" }}>
        <Smartie />
        <ContentBox text="Hello Sang" />
        <SpacerM />
        <MessageBox />
        <MessageBox
          title="Real Fact"
          content="Sang Le is handsome"
          caption="Smartie"
        />
        <MessageBox
          title="Blog"
          content="Why it's important to become a freelancer"
          caption="Sang Le"
        />
        <MessageBox />
        <SpacerL />
      </ScrollView>
    </Layout>
  );
}
