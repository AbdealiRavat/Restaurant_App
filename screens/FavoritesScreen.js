import { StyleSheet, Text, View } from "react-native";
import React from "react";

function FavoritesScreen() {
  return (
    <View style={styles.box}>
      <Text>Favorites Screen</Text>
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
