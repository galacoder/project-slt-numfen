import * as React from "react";
import styled from "styled-components/native";
import { Button, ProgressBar, Colors } from "react-native-paper";

import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";

export default function Result({ navigation }) {
  return (
    <>
      <Pagination />
      <Smartie />
      <ContentBox text="This is result page" />
      <NavBtnContainer>
        <BackButton onPress={() => navigation.navigate("Landing")}>
          Back
        </BackButton>
        <NextButton onPress={() => navigation.navigate("Payment")}>
          Next
        </NextButton>
      </NavBtnContainer>
    </>
  );
}

const Pagination = styled(ProgressBar).attrs({
  progress: 0.5,
})``;

const Title = styled.Text``;

const NavBtnContainer = styled.View`
  flex-direction: row;
`;

const BackButton = styled(Button).attrs({
  icon: "camera",
  mode: "outlined",
})``;

const NextButton = styled(Button).attrs({
  icon: "camera",
  mode: "contained",
})``;
