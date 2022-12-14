import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const Shadow = StyleSheet.create({
  shadowprop: {
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
export default Shadow;
