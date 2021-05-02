// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";

import Smartie from "../public/smartie.png";
import { spacing } from "../styles/Utils";
import { themes } from "../styles/ColorStyles";
import { View } from "react-native";

import Layout from "../layout/Layout";

import {
  Button,
  InputItem,
  List,
  DatePicker,
  Provider,
} from "@ant-design/react-native";

export default function App() {
  return (
    <Layout>
      <Container>
        <NavBar>
          <NavBarTitle> Thần Số Học </NavBarTitle>
        </NavBar>

        <ImageContainer>
          <ImageFrame></ImageFrame>
        </ImageContainer>

        <Message>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. orem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Message>

        <InputItem clear error type="text" placeholder="有标签" extra="元" />

        <InputItem clear error placeholder="有标签" />
        <Provider>
          <View>
            <List>
              <DatePicker
                mode="date"
                defaultDate={new Date()}
                format="YYYY-MM-DD"
              >
                <List.Item arrow="horizontal">Select Date</List.Item>
              </DatePicker>
            </List>
          </View>
        </Provider>
      </Container>
    </Layout>
  );
}

const Container = styled.View`
  width: 375px;
  height: 812px;
  border: 1px solid #eee;
  margin: 0 auto;
  padding: ${spacing.spacingSmall.box};
`;

const NavBar = styled.View`
  width: 100%;
  height: 53px;
  background-color: #eee;
`;

const NavBarTitle = styled.Text`
  font-size: 20px;
  margin: auto auto;
  font-weight: 600;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 214px;
  margin: 0 auto;
  background: transparent;
  border: solid 1px #eee;
`;

const ImageFrame = styled.Image`
  width: 224px;
  height: 224px;
  transform: scale(0.5);
  border: solid 1px #eee;
  background-image: url(${Smartie});
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto auto;
`;
const Message = styled.Text`
  width: 100%;
  color: ${themes.light.text1};
  padding-top: ${spacing.spacingSmall.box};
`;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         Welcome to Sang Le Tech Ecosystem - Project Num 👋
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 16,
//   },
// });
