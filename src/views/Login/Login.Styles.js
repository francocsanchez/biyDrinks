import { StyleSheet } from "react-native";

import { colors } from "../../global/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.color1,
  },
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    width: "100%",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.color2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom:10
  },
});

export { styles };
