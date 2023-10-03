import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home, Drink } from "../views";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerTitle: "TIPO DE BEBIDA",
          }}
        />
        <Stack.Screen
          name="Drinks"
          component={Drink}
          options={{
            headerTitleAlign: "center",
            headerTitle: "TIPO DE BEBIDA",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
