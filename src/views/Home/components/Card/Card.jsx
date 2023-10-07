import { Text, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./Card.Styles";

import { setDrinksForTipe } from "../../../../features/drink/drinkSlice";

const Card = ({ data, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        dispatch(setDrinksForTipe(data));
        navigation.navigate("ListFilter");
      }}
    >
      <View style={styles.rowCard}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </Pressable>
  );
};

export default Card;
