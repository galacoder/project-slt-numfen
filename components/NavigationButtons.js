import * as React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

export default function NavigationButton(props) {
  return (
    <NavBtnContainer>
      <BackButton onPress={props.backButtonOnPress}>
        {props.backButtonName}
      </BackButton>
      <NextButton onPress={props.nextButtonOnPress}>
        {props.nextButtonName}
      </NextButton>
    </NavBtnContainer>
  );
}

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
