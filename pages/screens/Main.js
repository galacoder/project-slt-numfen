// @generated: @expo/next-adapter@2.1.52
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Motivation from "./Motivation";
import YourNumerology from "./YourNumerology";
import Profile from "./Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: "false" }}>
      <Tab.Screen
        name="Động Lực"
        component={Motivation}
        options={{
          tabBarLabel: "Động Lực",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thần Số Học"
        component={YourNumerology}
        options={{
          tabBarLabel: "Thần Số Học",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tài Khoản"
        component={Profile}
        options={{
          tabBarLabel: "Tài Khoản",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
