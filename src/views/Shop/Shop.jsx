import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./Shop.Styles";
import { useSelector } from "react-redux";

const Shop = () => {
  const { listDrinkFav } = useSelector((state) => state.drink);

  console.log(listDrinkFav);
  return (
    <ScrollView>
      {listDrinkFav?.map((item, index) => (
        <View key={index}>
          <Text>Tragos seleccionados {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Shop;
