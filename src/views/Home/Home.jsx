import { View } from "react-native";

import { styles } from "./Home.Styles";

import { Card } from "./components";

import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const dataCard = {
    sinAlcohol: {
      title: "sin alcohol",
      img: <MaterialIcons name="no-drinks" size={100} color="black" />,
    },
    conAlcohol: {
      title: "con alcohol",
      img: <Entypo name="drink" size={100} color="black" />,
    },
  };
  return (
    <View style={styles.container}>
      <Card data={dataCard.sinAlcohol} />
      <Card data={dataCard.conAlcohol} />
    </View>
  );
};

export default Home;
