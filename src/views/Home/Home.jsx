import { View } from "react-native";

import { styles } from "./Home.Styles";

import { Card } from "./components";

import { Entypo, MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
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
      <Card data={dataCard.sinAlcohol} navigation={navigation} />
      <Card data={dataCard.conAlcohol} navigation={navigation} />
    </View>
  );
};

export default Home;
