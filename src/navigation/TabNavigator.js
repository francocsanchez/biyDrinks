import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";

import SearchStackNavigator from "./SearchStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="SearchTab" component={SearchStackNavigator} />
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
