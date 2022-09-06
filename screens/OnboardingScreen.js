import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.appTitle}>Roam</Text>
      </View>
      <View style={styles.mapImg}>
        <Image
          source={require("../assets/map-image.png")}
          width={1}
          height={1}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.beginBtn}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.beginBtnText}>Start Adventure</Text>
          <MaterialIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  beginBtnText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  beginBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D3D3D3",
    height: 50,
    width: 300,
    alignItems: "center",
    borderRadius: 3,
  },
  mapImg: {
    width: 410,
  },
});
export default Onboarding;
