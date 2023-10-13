import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "./MapPreview.Styles";
import { googleApi } from "../../../../firebase";

const MapPreview = ({ location }) => {
  const miMarcador = {
    latitude: location.latitude,
    longitude: location.longitude,
  };

  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}&markers=color:red%7Clabel:M%7C${miMarcador.latitude},${miMarcador.longitude}&key=${googleApi.mapStatic}`;
  return (
    <View style={styles.mapView}>
      <Image style={styles.mapElement} source={{ uri: mapPreviewUrl }} resizeMode="cover"/>
    </View>
  );
};

export default MapPreview;
