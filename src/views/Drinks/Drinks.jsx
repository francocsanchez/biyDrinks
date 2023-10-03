import { View, FlatList } from "react-native";
import { useEffect, useState } from "react";

import { DrinkCard } from "./components";

import { styles } from "./Drinks.Styles";

import axios from "axios";
import { useSelector } from "react-redux";

const Drinks = () => {
  const drinksType = useSelector((state) => state.drink.drinksType);

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${drinksType}`
        );
        setDrinks(response.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={drinks}
        keyExtractor={(drink) => drink.idDrink.toString()}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => <DrinkCard drink={item} />}
      />
    </View>
  );
};

export default Drinks;
