import { View, Text } from "react-native";

import { styles } from "./Card.Styles";

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.img}>{data.img}</Text>
      <Text style={styles.title}>{data.title} 2</Text>
    </View>
  );
};

export default Card;
