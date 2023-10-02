import { Text, Pressable } from "react-native";

import { styles } from "./Card.Styles";

const Card = ({ data, navigation }) => {
  return (
    <Pressable style={styles.card} onPress={() => {navigation.navigate("Drinks")}}>
      <Text style={styles.img}>{data.img}</Text>
      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
};

export default Card;
