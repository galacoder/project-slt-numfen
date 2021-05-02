import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components/native";
import { View } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function Layout({ children }) {
  return (
    <View>
      <Header />
      {children}
      <Footer />
    </View>
  );
}
