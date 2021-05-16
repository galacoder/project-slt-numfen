import * as React from "react";
import styled from "styled-components/native";
import { Button, ProgressBar, Colors } from "react-native-paper";
import { ScrollView, SafeAreaView } from "react-native";

import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import NotionPage from "../../lib/getNotionPage";

export default function Result({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Pagination />
        <Smartie />
        <ContentBox text="This is result page" />
        <NotionPage />

        <NavBtnContainer>
          <BackButton onPress={() => navigation.navigate("Landing")}>
            Back
          </BackButton>
          <NextButton onPress={() => navigation.navigate("Payment")}>
            Next
          </NextButton>
        </NavBtnContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const Pagination = styled(ProgressBar).attrs({
  progress: 0.5,
})``;

const NavBtnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

const BackButton = styled(Button).attrs({
  icon: "camera",
  mode: "outlined",
})``;

const NextButton = styled(Button).attrs({
  icon: "camera",
  mode: "contained",
})``;
