import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./Home.Styles";

import { Card } from "./components";

const Home = ({ navigation }) => {
  const dataCard = {
    filterByGlases: {
      title: "Por Copa",
      urlPath: "g=",
      input: "strGlass",
    },
    filterForTypeCocktail: {
      title: "Por Bebida",
      urlPath: "c=",
      input: "strCategory",
    },
    filterForIngredients: {
      title: "Por Ingrediente",
      urlPath: "i=",
      input: "strIngredient1",
    },
    filterByAlcoholic: {
      title: "Contenido de Alcohol",
      urlPath: "a=",
      input: "strAlcoholic",
    },
  };
  return (
    <View style={styles.container}>
      <Card data={dataCard.filterByGlases} navigation={navigation} />
      <Card data={dataCard.filterForTypeCocktail} navigation={navigation} />
      <Card data={dataCard.filterForIngredients} navigation={navigation} />
      <Card data={dataCard.filterByAlcoholic} navigation={navigation} />
    </View>
  );
};

export default Home;
