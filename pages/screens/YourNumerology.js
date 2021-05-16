// @generated: @expo/next-adapter@2.1.52
import React from "react";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import { SpacerL, SpacerM } from "../../styles/spacing";
import Layout from "../../components/Layout";

export default function YourNumerology({ navigation }) {
  return (
    <Layout>
      <Smartie />
      <SpacerM />
      <ContentBox text="This is Your Numerology page" />
      <SpacerL />
    </Layout>
  );
}
