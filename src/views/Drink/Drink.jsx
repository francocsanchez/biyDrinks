import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useEffect, useState } from "react";

import axios from "axios";

import { styles } from "./Drink.Styles";
import { IconFav } from "./components";

import { useSelector } from "react-redux";

const Drink = () => {
  const { drinkSelectedId } = useSelector((state) => state.drink);

  const [drink, setDrink] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkSelectedId}`
        );

        setDrink(response.data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const ingredientsList = [];
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(ingredient);
      ingredientsList.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.section, styles.alingCenterImg]}>
        <View style={{ position: "relative" }}>
          <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
          <IconFav id={drinkSelectedId} />
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
          {ingredientsList.map((ingredient, index) => (
            <Text style={styles.ingredientText} key={index}>
              {ingredient}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instrucciones:</Text>
        <Text>{drink.strInstructionsES}</Text>
      </View>
    </ScrollView>
  );
};

export default Drink;
