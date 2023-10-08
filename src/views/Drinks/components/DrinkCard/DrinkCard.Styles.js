import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBEAF1",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 175,
    margin: "2.5%",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { styles };
