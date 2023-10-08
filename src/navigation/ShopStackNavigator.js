import { createStackNavigator } from "@react-navigation/stack";

import { Shop } from "../views";

import { colors } from "../global/Colors";

const Stack = createStackNavigator();

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search"
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
    }}>
      <Stack.Screen
        name="Search"
        component={Shop}
        options={{
          headerTitleAlign: "center",
          headerTitle: "LISTA DE COMPRAS",
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;
