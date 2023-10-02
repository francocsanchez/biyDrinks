import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../views";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
