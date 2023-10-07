import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { Home, Drink, Drinks, ListFilter } from "../views";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const { filterType, filterItem } = useSelector((state) => state.drink);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: "BUSCAR BEBIDA",
        }}
      />
      <Stack.Screen
        name="ListFilter"
        component={ListFilter}
        options={{
          headerTitleAlign: "center",
          headerTitle: filterType.title,
        }}
      />
      <Stack.Screen
        name="Drinks"
        component={Drinks}
        options={{
          headerTitleAlign: "center",
          headerTitle: filterItem,
        }}
      />
      <Stack.Screen
        name="Drink"
        component={Drink}
        options={{
          headerTitleAlign: "center",
          headerTitle: "BEBIDA",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
