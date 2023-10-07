import axios from "axios";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { styles } from "./ListFilter.Styles";
import { List } from "./components";

const ListFilter = ({navigation}) => {
  const drinksType = useSelector((state) => state.drink.filterType);

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/${drinksType.url}list`
        );
        setDrinks(response.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={drinks}
        keyExtractor={(drink, index) => index.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <List data={item[drinksType.input]}  navigation={navigation}/>}
      />
    </View>
  );
};

export default ListFilter;
