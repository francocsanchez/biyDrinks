import { createStackNavigator } from "@react-navigation/stack";

import { Home, Drink, Drinks, ListFilter } from "../views";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {

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
            headerTitle: "FILTRO POR ....",
          }}
        />
        <Stack.Screen
          name="Drinks"
          component={Drinks}
          options={{
            headerTitleAlign: "center",
            headerTitle: "TIPO DE BEBIDA",
          }}
        />
        <Stack.Screen
          name="Drink"
          component={Drink}
          options={{
            headerTitleAlign: "center",
            headerTitle: "TIPO DE BEBIDA",
          }}
        />
      </Stack.Navigator>
  );
};

export default HomeStackNavigator;
