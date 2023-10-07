import { Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./List.Styles";

const List = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
};

export default List;
