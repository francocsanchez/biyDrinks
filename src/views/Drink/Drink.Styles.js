import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 65,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 5,
  },
  alingCenterImg: {
    alignItems: "center",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ingredientText: {
    marginBottom: 4,
  },
  favoriteIcon: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    borderWidth: 0.9,
    borderColor: "#000000",
  },
});

export { styles };
