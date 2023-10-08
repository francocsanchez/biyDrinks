import { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import axios from "axios";

import { styles } from "./Shop.Styles";
import { useSelector } from "react-redux";

const Shop = () => {
  const { listDrinkFav } = useSelector((state) => state.drink);
  const [ingre, setIngre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      for (const id of listDrinkFav) {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          );

          const ingredientsList = [];

          for (let i = 1; i <= 15; i++) {
            let ingredient = response.data.drinks[0][`strIngredient${i}`];
            if (ingredient) {
              ingredientsList.push(ingredient);
            }
          }
          let iTotals = [...iTotals, ingredientsList];
          setIngre([...new Set([].concat(...iTotals.filter(Boolean)))]);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [listDrinkFav]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ingredientView}>
        {ingre?.map((ingredient, index) => (
          <View key={index} style={styles.ingredientContainer}>
            <Image
              source={{
                uri: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`,
              }}
              style={styles.ingredientImage}
            />
            <Text style={styles.textIngredient}>{ingredient}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Shop;
