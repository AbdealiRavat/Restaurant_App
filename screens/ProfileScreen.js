import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";

function ProfileScreen() {
  return (
    <View scrollable={true} hasSafeArea={false} style={tw`bg-white`}>
      <View style={tw`mt-10`}>
        <TouchableOpacity style={tw`text-black`}>
          <Text style={tw`text-black text-center font-bold text-lg py-2`}>
            Jessica black
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonP2}>
          <Text style={tw`text-black text-center text-lg`}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`my-2px`}>
        <TouchableOpacity style={styles.touchableOk}>
          <View style={tw`flex flex-row justify-between items-center px-5`}>
            <Text style={tw`text-black text-left text-lg`}>
              Privacy Settings
            </Text>
            <Ionicons
              style={styles.IoniconsFE}
              size={24}
              color="#8732fc"
              name="person-circle"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOm}>
          <View style={tw`flex flex-row justify-between items-center px-5`}>
            <Text style={tw`text-black text-left text-lg`}>Notifications</Text>
            <Ionicons
              style={styles.iconCl}
              color="#8732fc"
              name="notifications"
              size={24}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableBp}>
          <View style={tw`flex flex-row justify-between items-center px-5`}>
            <Text style={tw`text-black text-left text-lg`}>Order History</Text>
            <Ionicons
              style={styles.iconZz}
              color="#8732fc"
              size={24}
              name="timer-outline"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableJg}>
          <View style={tw`flex flex-row justify-between items-center px-5`}>
            <Text style={tw`text-black text-left text-lg`}>
              Payment Details
            </Text>
            <Ionicons
              style={styles.iconZb}
              size={24}
              name="card"
              color="#8732fc"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainerJb: {
    justifyContent: "space-between",
  },
  viewKs: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: 30,
  },
  viewYR: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: 30,
  },
  viewS1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 30,
  },
  viewAl: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: 30,
  },
  imageBackgroundNb: {
    width: "100%",
    height: 250,
  },
  imageA3: {
    height: 120,
    width: 120,
  },
  containerEA: {
    alignItems: "center",
    marginTop: 65,
  },
  textJG: {
    width: "100%",
    alignContent: "center",
    marginTop: 16,
    marginLeft: 50,
  },
  textPr: {
    width: "100%",
    textAlign: "center",
    marginLeft: 20,
  },
  touchableOk: {
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  iconFE: {
    height: 24,
    width: 24,
  },
  iconCl: {
    width: 24,
    height: 24,
  },
  iconZz: {
    width: 24,
    height: 24,
  },
  iconZb: {
    height: 24,
    width: 24,
  },
  buttonP2: {
    marginTop: 16,
    alignSelf: "center",
    width: "50%",
  },
  touchableOm: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableBp: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableJg: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
});

export default ProfileScreen;
