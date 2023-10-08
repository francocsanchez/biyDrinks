import { createStackNavigator } from "@react-navigation/stack";

import { Shop } from "../views";

const Stack = createStackNavigator();

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Shop}
        options={{
          headerTitleAlign: "center",
          headerTitle: "BUSCADOR DE BEBIDAS",
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;
