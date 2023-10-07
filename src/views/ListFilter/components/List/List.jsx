import { Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./List.Styles";

import { setDrinksListItem } from "../../../../features/drink/drinkSlice";

const List = ({ item, navigation }) => {
  const drinksType = useSelector((state) => state.drink.filterType);
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("Drinks");
        dispatch(setDrinksListItem(item[drinksType.input]));
      }}
    >
      <Text style={styles.text}>{item[drinksType.input]}</Text>
    </Pressable>
  );
};

export default List;
