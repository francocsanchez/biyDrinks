// DrinkCard.js
import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./DrinkCard.Styles";

import { useDispatch } from "react-redux";
import { setDrinkSelected } from "../../../../features/drink/drinkSlice";

const DrinkCard = ({ drink, navigation }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        dispatch(setDrinkSelected(drink.idDrink));
        navigation.navigate("Drink");
      }}
    >
      <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
      <Text style={styles.title}>{drink.strDrink}</Text>
    </TouchableOpacity>
  );
};

export default DrinkCard;
