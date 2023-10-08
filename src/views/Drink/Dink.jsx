import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import axios from "axios";

import { styles } from "./Drink.Styles";

import { useDispatch, useSelector } from "react-redux";
import { setListBuyIngredientes } from "../../features/drink/drinkSlice";

const Dink = () => {
  const dispatch = useDispatch();
  const drinkId = useSelector((state) => state.drink.drinkSelectedId);

  const [drink, setDrink] = useState({});
  const [fav, setFav] = useState(false);

  const handleClickFav = () => {
    setFav(!fav);
  };

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

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.section, styles.alingCenterImg]}>
        <View style={{ position: "relative" }}>
          <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
          <Pressable
            style={styles.favoriteIcon}
            onPress={() => handleClickFav()}
          >
            {!fav ? (
              <AntDesign name="hearto" size={24} color="#F04A4A" />
            ) : (
              <AntDesign name="heart" size={24} color="#F04A4A" />
            )}
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
          {ingredients.map((ingredient, index) => (
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

export default Dink;
