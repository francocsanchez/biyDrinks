import { createStackNavigator } from "@react-navigation/stack";

import React from "react";

import { colors } from "../global/Colors";

import { Map } from "../views";

const Stack = createStackNavigator();

const StoreStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.color2,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerTitleAlign: "center",
          headerTitle: "ENCUENTRA TU TIENDA",
        }}
      />
    </Stack.Navigator>
  );
};

export default StoreStackNavigator;
