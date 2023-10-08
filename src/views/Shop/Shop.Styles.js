import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  ingredientView: {
    marginBottom: 60,
    marginTop: 20,
  },
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  ingredientImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textIngredient: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
  },
});

export { styles };
