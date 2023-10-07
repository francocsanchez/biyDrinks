import { createStackNavigator } from "@react-navigation/stack";

import { Search } from "../views";

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitleAlign: "center",
          headerTitle: "BUSCADOR DE BEBIDAS",
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
