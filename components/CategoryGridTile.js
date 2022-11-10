import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import react from "react";
import { useNavigation } from "@react-navigation/native";
import Shadow from "../components/Shadow.js";
import tw from "twrnc";

function CategoryGridTile({ title, color, onPress }) {
  useNavigation();
  return (
    // <View style={tailwind('text-blue-600')}>
    <View
      // style={styles.container}
      style={tw`flex-1 m-2 p-3 bg-white rounded-xl h-40 `}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View
          style={[
            // styles.InnerContainer,
            tw` items-center justify-center bg-white h-full `,
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    overflow: (Platform.OS = "android" ? "hidden" : "visible"),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  InnerContainer: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "#005C35",
  },
});

export default CategoryGridTile;
