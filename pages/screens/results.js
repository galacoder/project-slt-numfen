import * as React from "react";
import styled from "styled-components/native";
import { ProgressBar } from "react-native-paper";
import { ScrollView, SafeAreaView, Platform } from "react-native";

import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import NotionPage from "../../lib/getNotionPage";
import NavigationButtons from "../../components/NavigationButtons";
import Layout from "../../components/Layout";
import { SpacerL, SpacerM } from "../../styles/spacing";

export default function Result({ navigation }) {
  const isIOS = Platform.OS === "ios";

  return (
    <>
      {isIOS && (
        <SafeAreaView>
          <ScrollView>
            <Pagination />
            <Smartie />
            <SpacerM />
            <ContentBox text="This is result page" />
            <SpacerL />
            <NotionPage />

            <NavigationButtons
              backButtonName="Trở Lại"
              backButtonOnPress={() => navigation.navigate("Landing")}
              nextButtonName="Tiếp"
              nextButtonOnPress={() => navigation.navigate("Payment")}
            />
          </ScrollView>
        </SafeAreaView>
      )}
      {!isIOS && (
        <ScrollView>
          <Pagination />
          <Smartie />
          <ContentBox text="This is result page" />
          <NotionPage />

          <NavigationButtons
            backButtonName="Trở Lại"
            backButtonOnPress={() => navigation.navigate("Landing")}
            nextButtonName="Tiếp"
            nextButtonOnPress={() => navigation.navigate("Payment")}
          />
        </ScrollView>
      )}
    </>
  );
}

const Pagination = styled(ProgressBar).attrs({
  progress: 0.5,
})``;
