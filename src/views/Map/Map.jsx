import { View, Text } from "react-native";
import React from "react";
import * as Location from "expo-location";

import { styles } from "./Map.Styles";
import { useState, useEffect } from "react";
import MapPreview from "./components/MapPreview/MapPreview";

const Map = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });

  useEffect(() => {
    const location = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });
    };

    location();
  }, []);

  return (
    <View>
      {location ? (
        <View>
          <MapPreview location={location} />
        </View>
      ) : (
        <View>
          <Text>No puedo encontrarte</Text>
        </View>
      )}
    </View>
  );
};

export default Map;
