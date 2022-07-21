import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { useNavigation } from "@react-navigation/native";

function IconButton() {
    const navigation = useNavigation();
    function iconbuttonHandler() { 
        navigation.navigate("Favorites")    
    }     
  return (
    <Pressable
      onPress={iconbuttonHandler}
      style={({ pressed }) => [
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <Ionicons name="bookmark-outline" size={24} color="black" />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
});

export default IconButton;
