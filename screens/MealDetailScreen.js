import { useLayoutEffect, createContext } from "react";
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
import List from "../components/MealDetail/list";
import { FavoriteContext } from "../Store/Context/Favorites-context";

import tw from "twrnc";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = createContext(FavoriteContext);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "182ba281eemsh7b799fb9491c4e3p1ecc81jsnf789cb9a2f30",
  //     "X-RapidAPI-Host": "udayogra-indian-restaurants-menu-v1.p.rapidapi.com",
  //   },
  // };

  // fetch(
  //   "https://udayogra-indian-restaurants-menu-v1.p.rapidapi.com/dl?area=koramangala&city=bangalore",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function HeaderHandler() {}
  //   if (mealIsFavorite) {
  //     favoriteMealsCtx.RemoveFavorite(mealId);
  //   } else {
  //     favoriteMealsCtx.addFavorite(mealId);
  //   }

  useLayoutEffect(() => {
    const selectedMeal = MEALS.find((meal) => meal.id === mealId).title;

    navigation.setOptions({
      title: selectedMeal,
      headerRight: () => {
        return <IconButton onPress={HeaderHandler} />;
        // <TouchableOpacity onPress={HeaderHandler}><Text>Tap Me</Text></TouchableOpacity>
      },
    });
  }, [navigation, HeaderHandler]);

  return (
    <ScrollView>
      <View
        style={tw`m-5`}
        // style={styles.Container}
      >
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.Details}>
          <Text style={tw`text-white text-center font-bold text-lg py-2`}>
            {selectedMeal.title}
          </Text>
          <View style={[styles.container3, Shadow.shadowprop]}>
            <MealDetails
              duration={selectedMeal.duration}
              affordability={selectedMeal.affordability.toUpperCase()}
              complexity={selectedMeal.complexity.toUpperCase()}
            />
          </View>

          <Text style={styles.Title}>ingredients</Text>
          {/* <Text style={styles.Title}>ingredients</Text> */}

          {/* <View style={[styles.container2, Shadow.shadowprop]}> */}

          <View style={[tw`bg-white rounded-xl p-2`, Shadow.shadowprop]}>
            {selectedMeal.ingredients.map((ingredient) => (
              <Text key={ingredient} style={styles.txt}>
                {ingredient}
              </Text>
            ))}
          </View>

          <Text style={styles.Title}>Steps</Text>
          <View style={[styles.container2, Shadow.shadowprop]}>
            {/* <View style={tw`bg-white rounded-xl p-2 shadow-lg`}> */}
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
    flex: 2,
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
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  container3: {
    borderRadius: 20,
    overflow: (Platform.OS = "android" ? "hidden" : "visible"),
    padding: 5,
    backgroundColor: "#fff",
  },

  Title: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
});

export default MealDetailScreen;
