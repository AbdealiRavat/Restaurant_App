import { useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MEALS } from "../Data/dummy-data";
import MealDetails from "../components/MealDetails";
import Shadow from "../components/Shadow.js";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function HeaderHandler(){}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={HeaderHandler}/>
        // <TouchableOpacity onPress={HeaderHandler}><Text>Tap Me</Text></TouchableOpacity>
      }});
  }, [navigation, HeaderHandler])

  return (
    <ScrollView>
      <View style={styles.Container}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.Details}>
          <Text style={styles.Title}>{selectedMeal.title}</Text>
          <View style={[styles.container3, Shadow.shadowprop]}>
            <MealDetails
              duration={selectedMeal.duration}
              affordability={selectedMeal.affordability.toUpperCase()}
              complexity={selectedMeal.complexity.toUpperCase()}
            />
          </View>

          <Text style={styles.Title}>ingredients</Text>
          <View style={[styles.container2, Shadow.shadowprop]}>
            {selectedMeal.ingredients.map((ingredient) => (
              <Text key={ingredient} style={styles.txt}>
                {ingredient}
              </Text>
            ))}
          </View>

          <Text style={styles.Title}>Steps</Text>
          <View style={[styles.container2, Shadow.shadowprop]}>
            {selectedMeal.steps.map((step) => (
              <Text key={step} style={styles.txt}>
                {"\u2022"} {step}
              </Text>
            ))}
          </View>

        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,

    margin: 20,
  },
  Details: {},
  txt: {
    padding: 4,
  },
  container2: {
    borderRadius: 15,
    overflow: (Platform.OS = "android" ? "hidden" : "visible"),
    padding: 7,
    backgroundColor: "#ffffff",
    marginBottom: 10,
  },
  container3: {
    borderRadius: 20,
    overflow: (Platform.OS = "android" ? "hidden" : "visible"),
    padding: 5,
    backgroundColor: "#ffffff",
  },

  Title: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
});

export default MealDetailScreen;
