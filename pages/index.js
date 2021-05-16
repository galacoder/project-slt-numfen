// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./screens/Landing";
import Result from "./screens/Results";
import Payment from "./screens/Payment";
import Momo from "./screens/MomoPayment";
import Baokim from "./screens/BaokimPayment";
import Success from "./screens/SuccessPayment";
import Failure from "./screens/FailurePayment";
import Help from "./screens/Help";
import Main from "./screens/Main";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <Container>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ title: "Thần Số Học", headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{
                headerLeft: () => null,
                title: "Kết Quả",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Momo"
              component={Momo}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Baokim"
              component={Baokim}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Failure"
              component={Failure}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </PaperProvider>
  );
}

const isWebView = () => {
  return Platform.OS === "web";
};

const Container = styled.View`
  flex: 1;
  margin: 0 auto;
  width: ${isWebView() ? "465px" : "100%"};
`;
