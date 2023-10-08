import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import axios from "axios";

import { styles } from "./Drink.Styles";

import { useSelector } from "react-redux";

const Dink = () => {
  const drinkId = useSelector((state) => state.drink.drinkSelectedId);

  const [drink, setDrink] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        );
        setDrink(response.data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.section, styles.alingCenterImg]}>
        <View style={{ position: "relative" }}>
          <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
          <Pressable style={styles.favoriteIcon}>
            <AntDesign name="hearto" size={24} color="#000" />
          </Pressable>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nombre:</Text>
        <Text>{drink.strDrink}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categoria:</Text>
        <Text>{drink.strCategory}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tipo:</Text>
        <Text>{drink.strAlcoholic}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredientes:</Text>
        <View>
          <Text style={styles.ingredientText}>
            {`${drink.strIngredient1} - ${drink.strMeasure1}`}
          </Text>
          <Text style={styles.ingredientText}>
            {`${drink.strIngredient2} - ${drink.strMeasure2}`}
          </Text>
          <Text style={styles.ingredientText}>
            {`${drink.strIngredient3} - ${drink.strMeasure3}`}
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instrucciones:</Text>
        <Text>{drink.strInstructionsES}</Text>
      </View>
    </ScrollView>
  );
};

export default Dink;
