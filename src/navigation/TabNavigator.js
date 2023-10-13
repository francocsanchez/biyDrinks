import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import HomeStackNavigator from "./HomeStackNavigator";
import ShopStackNavigator from "./ShopStackNavigator";
import StoreStackNavigator from "./StoreStackNavigator";

import { colors } from "../global/Colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarStyle: styles.tabBar,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconContainer : null}>
                <Feather name="search" size={24} color="#fff" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="StoreTab"
          component={StoreStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconContainer : null}>
                <FontAwesome5 name="store" size={24} color="#fff" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SearchTab"
          component={ShopStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.iconContainer : null}>
                <Feather name="shopping-cart" size={24} color="#fff" />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.color2,
    position: "absolute",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 60,
  },
  iconContainer: {
    backgroundColor: colors.color1,
    borderRadius: 25,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
