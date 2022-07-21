import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import  { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../Data/dummy-data";
import MealItem from "../components/MealItem";
import IconButton from "../components/IconButton";

function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  
  function HeaderHandler() {  }
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
      headerRight: () => {
        return <IconButton onPress={HeaderHandler}/>
      }
    });
  }, [navigation.catId, HeaderHandler ]);

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
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealOverviewScreen;
