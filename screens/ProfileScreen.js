import { StyleSheet, View, TouchableOpacity, Text} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <View
      scrollable={true}
      hasSafeArea={false}
    >
      <View style={styles.containerEA}>
        <TouchableOpacity style={styles.textJG}>
          <Text>Jessica Green</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonP2}>
        <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.screenContainerJb}>
        <TouchableOpacity style={styles.touchableOk}>
          <View style={styles.viewKs}>
            <Text style={styles.textPr}>Privacy Settings      
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
          <View style={styles.viewYR}>
            <Text style={styles.textPr}>Notifications
            <Ionicons
              style={styles.iconCl}
              color="#8732fc"
              name="notifications"
              size={24}
                />
              </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableBp}>
          <View style={styles.viewS1}>
          <Text style={styles.textPr}>Order History
            <Ionicons
              style={styles.iconZz}
              color="#8732fc"
              size={24}
              name="timer-outline"
                />
                </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableJg}>
          <View style={styles.viewAl}>
            <Text style={styles.textPr}>Payment Details
            <Ionicons
              style={styles.iconZb}
              size={24}
              name="card"
              color="#8732fc"
                />
                </Text>
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
    marginHorizontal: 30
  },
  viewYR: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  viewS1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewAl: {
    justifyContent: "space-between",
    flexDirection: "row",
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








