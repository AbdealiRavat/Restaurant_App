import { FlatList, StyleSheet, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { useLayoutEffect } from "react";

import { CATEGORIES } from "../Data/dummy-data";
import NotificationIcon from "../components/NotificationIcon";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        // color={itemData.item.color}
        onPress={pressHandler}
        navigation={navigation}
      />
    );
  }

  function HeaderHandler() {}
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Marriott",
      headerRight: () => {
        return <NotificationIcon onPress={HeaderHandler} />;
      },
    });
  }, [navigation, HeaderHandler]);

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        // keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 5,
    marginBottom: 50,
  },
});

export default CategoriesScreen;
