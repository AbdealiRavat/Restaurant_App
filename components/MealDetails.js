import { StyleSheet, Text, View } from "react-native";
import React from "react";

function MealDetails({ 
    duration,
    complexity,
    affordability,}) {
  return (
    <View style={styles.Details}>
      <Text style={styles.ItemDetails}>{duration} min</Text>
      <Text style={styles.ItemDetails}>{complexity}</Text>
      <Text style={styles.ItemDetails}>{affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Details: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ItemDetails: {
    color: "#547861",    
    fontSize: 14,
  },
});

export default MealDetails;
