import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import Shadow from "../components/Shadow.js";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }
  return (
    <View style={[styles.container, Shadow.shadowprop]}>
      <Pressable
        android_ripple={{ color: "#9dcee2" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.Title}>{title}</Text>
          </View>
          {/* <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          /> */}
          <View style={styles.Details}>
            <Text style={styles.ItemDetails}>{duration} min</Text>
            <Text style={styles.ItemDetails}>{complexity.toUpperCase()}</Text>
            <Text style={styles.ItemDetails}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 15,
    overflow: (Platform.OS = "android" ? "hidden" : "visible"),
    backgroundColor: "#fff",
  },
  innerContainer: {
    borderRadius: 8,
    margin: 8,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  Title: {
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#94B49F",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  Details: {
    padding: 8,
    fontSize: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ItemDetails: {
    color: "#4f654f",
  },
});
export default MealItem;
