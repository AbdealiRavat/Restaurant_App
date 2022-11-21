import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

function ChatScreen() {
  return (
    <View>
      <Image
        source={require("../assets/22.png")}
        resizeMode="contain"
        style={{ position: "absolute", top: 0, left: -5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ChatScreen;
