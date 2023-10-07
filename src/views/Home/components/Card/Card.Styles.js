import { StyleSheet } from "react-native";

import { colors } from "../../../../global/Colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.color2,
    borderRadius: 8,
    padding: 25,
    marginBottom: 70,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    width: "80%",
    alignSelf: "center",
  },
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
  img: {
    textAlign: "center",
  },
});

export { styles };
