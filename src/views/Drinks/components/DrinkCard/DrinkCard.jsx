// DrinkCard.js
import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./DrinkCard.Styles";

const DrinkCard = ({ drink }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
      <Text style={styles.title}>{drink.strDrink}</Text>
    </View>
  );
};

export default DrinkCard;
