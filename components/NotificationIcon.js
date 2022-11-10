import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { useNavigation } from "@react-navigation/native";

function NotificationIcon() {
  const navigation = useNavigation();
  function iconbuttonHandler() {
    navigation.navigate("Notifications");
  }
  return (
    <Pressable
      onPress={iconbuttonHandler}
      style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
    >
      <Ionicons
        style={styles.Button}
        name="notifications-outline"
        size={24}
        color="#fff"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Button: {
    margin: 20,
  },
});

export default NotificationIcon;
