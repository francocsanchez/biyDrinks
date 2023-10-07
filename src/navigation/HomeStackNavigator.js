import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { Home, Drink, Drinks, ListFilter } from "../views";

import { colors } from "../global/Colors";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const { filterType, filterItem } = useSelector((state) => state.drink);

  return (
    <Stack.Navigator
      initialRouteName="Home"
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
