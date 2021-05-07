// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import Smartie from "../../components/Smartie";
import ContentBox from "../../components/ContentBox";
import SingleButton from "../../components/SingleButton";

export default function Payment({ navigation }) {
  return (
    <>
      <Smartie />
      <ContentBox text="This is payment page" />
      <SingleButton onPress={() => navigation.navigate("Result")} />
    </>
  );
}
