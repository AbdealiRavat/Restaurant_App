import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationScreen from "./screens/NotificationScreen";
import { BlurView } from "expo-blur";
import FavoriteContextProvider from "./Store/Context/Favorites-context";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#FF9d3B",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        headerTintColor: "#ffff",
        headerTitleAlign: "center",

        tabBarActiveTintColor: "#215F00",
        tabBarInactiveTintColor: "#c5c5c5",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          // height: 50,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },

        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Categories") {
            iconName = "fast-food";
          } else if (route.name === "Favorites") {
            iconName = "bookmark";
          } else if (route.name === "Chats") {
            iconName = "chatbox-ellipses";
          } else if (route.name === "profile") {
            iconName = "person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <BottomTab.Screen name="Categories" component={CategoriesScreen} />
      <BottomTab.Screen name="Favorites" component={FavoritesScreen} />
      <BottomTab.Screen name="Chats" component={ChatScreen} />
      <BottomTab.Screen name="profile" component={ProfileScreen} />
      {/* <BottomTab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: () => {
              return <Ionicons style={styles.ionicons} name="home" size={22} />;
            },
          }}
        />
        <BottomTab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons style={styles.ionicons} name="bookmark" size={22} />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons
                  style={styles.ionicons}
                  name="chatbox-ellipses"
                  size={22}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => {
              return <Ionicons style={styles.ionicons} name="people" size={22} />;
            },
          }}
        /> */}
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#000",
              // headerTitleAlign: "center",
              contentStyle: { backgroundColor: "#FF9d3B" },
              // sceneContainerStyle: { backgroundColor: "#94B49F" },
            }}
          >
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
            <Stack.Screen name="Notifications" component={NotificationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  ionicons: {
    color: "#3a664a",
  },
});
