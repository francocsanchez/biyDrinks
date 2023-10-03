import { Text, Pressable } from "react-native";

import { styles } from "./Card.Styles";

import { useDispatch } from "react-redux";
import { setDrinksForTipe } from "../../../../features/drink/drinkSlice";

const Card = ({ data, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        dispatch(setDrinksForTipe(data.tipe));
        navigation.navigate("Drinks");
      }}
    >
      <Text style={styles.img}>{data.img}</Text>
      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
};

export default Card;
