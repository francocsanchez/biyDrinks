import { View, TextInput } from "react-native";

import { styles } from "./Search.Styles";

const Search = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Buscar..."
      />
    </View>
  );
};

export default Search;
