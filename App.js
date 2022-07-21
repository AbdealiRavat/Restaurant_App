import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationScreen from "./screens/NotificationScreen";
import { BlurView } from "expo-blur";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ffb485" },
        headerTintColor: "#ffff",
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#fff",
        tabBarShowLabel: false,

        tabBarStyle: { position: "absolute" },
        // tabBarBackground: () => (
        //   <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill}/>

        // ),
      }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home" color="#ffb485" size={22} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="bookmark" color="#3a664a" size={22} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: () => {
           
            return <Ionicons name="chatbox-ellipses" color="#3a664a" size={22} />;
          },
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="people" color="#3a664a" size={22} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

// function DrawerNavigator() {
//  return(
//   <Drawer.Navigator screenOptions={{
//     headerStyle: { backgroundColor: "#547861" },
//     headerTintColor: "#ffff",
//     drawerActiveBackgroundColor: "#94B49F",
//      drawerActiveTintColor: "#fff",
//      drawerItemStyle: {
//       borderRadius: 10
//     }
//   }}>
//      <Drawer.Screen name="Categories" component={CategoriesScreen}
//        options={{
//          drawerIcon: (() => {
//            return <Ionicons name='home' color='#3a664a' size={20} />
//          })
//        }}
//      />
//      <Drawer.Screen name="Favorites" component={FavoritesScreen}
//       options={{
//         drawerIcon: (() => {
//           return <Ionicons name='star' color='#3a664a' size={20} />
//         })
//       }}/>
//   </Drawer.Navigator>
// )}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
             headerStyle: { backgroundColor: "#ff924d" },
            // headerTintColor: "#547861",
            // headerTitleAlign: "center",
            contentStyle: { backgroundColor: "#ffb485" },
            // sceneContainerStyle: { backgroundColor: "#94B49F" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{
              headerShown: false,
              //   title: "All Categories",
              //   headerStyle: { height: 80 },
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
