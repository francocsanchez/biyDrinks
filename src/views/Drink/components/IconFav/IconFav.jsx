import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./IconFav.Styles";
import { useDispatch, useSelector } from "react-redux";

import { setListDrinkFav } from "../../../../features/drink/drinkSlice";
import { useState, useEffect } from "react";

const IconFav = ({ id }) => {
  const { listDrinkFav } = useSelector((state) => state.drink);
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();

  const handleClickAddFav = (id) => {
    dispatch(setListDrinkFav(id));
    setFav(!fav);
  };
  useEffect(() => {
    const isFav = async () => {
      let isFav = listDrinkFav.includes(id);
      setFav(isFav);
    };

    isFav();
  }, []);
  return (
    <Pressable
      style={styles.favoriteIcon}
      onPress={() => handleClickAddFav(id)}
    >
      {!fav ? (
        <AntDesign name="hearto" size={styles.font} color={styles.color} />
      ) : (
        <AntDesign name="heart" size={styles.font} color={styles.color} />
      )}
    </Pressable>
  );
};

export default IconFav;
