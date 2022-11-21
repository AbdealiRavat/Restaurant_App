import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function FavoritesScreen() {
  return (
    <View
      style={{
        height: "50%",
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/kk.jpg")}
        resizeMode="contain"
        style={{
          height: "100%",
          width: "100%",
          marginRight: -15,
          marginTop: 50,
          borderRadius: 20,
        }}
      />
    </View>
  );
}

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
