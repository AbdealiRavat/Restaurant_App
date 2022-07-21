import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  
  function ProfileScreeen() {
    return (
      <View
        style={styles.screenContainerJb}
        scrollable={true}
        hasSafeArea={false}
      >
        <View style={styles.containerEA} elevation={0}>
          <Text style={styles.textPr}>Jessica Green</Text>
          <TouchableOpacity style={styles.buttonP2} type="outline">
            Edit Profile
          </TouchableOpacity>
        </View>
        <View elevation={0}>
          <TouchableOpacity style={styles.touchableOk}>
            <View style={styles.viewKs}>
              <Text style={styles.textPr}>Privacy Settings</Text>
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
              <Text style={styles.textPr}>Notifications</Text>
              <Ionicons
                style={styles.iconCl}
                color="#8732fc"
                name="notifications"
                size={24}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableBp}>
            <View style={styles.viewS1}>
              <Text style={styles.textPr}>Order History</Text>
              <Ionicons
                style={styles.iconZz}
                color="#8732fc"
                size={24}
                name="timer-outline"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableJg}>
            <View style={styles.viewAl}>
              <Text style={styles.textPr}>Payment Details</Text>
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
      justifyContent: "space-evenly",
    },
    viewKs: {
      justifyContent: "space-between",
      flexDirection: "row",
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
      marginTop: -65,
    },
    textPr: {
      width: "100%",
      textAlign: "center",
      marginTop: 16,
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
  
  export default ProfileScreeen;
  