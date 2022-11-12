import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealItem from "../MealItem";

const MealList = (props) => {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const MealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };
    return <MealItem {...MealItemProps} />;
  }

  <View style={styles.container}>
    <FlatList
      data={props.ListData}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealList;
