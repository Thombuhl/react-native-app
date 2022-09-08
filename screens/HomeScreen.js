import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ({ navigation }) => {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.banner}>
          <Text style={styles.welcomeMsg}> Hello </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CustomDrawerContent")}
          >
            <MaterialIcons name="user-circle" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={styles.tripBtn}
              onPress={() => navigation.navigate("NewTripScreen")}
            >
              <Text style={styles.tripBtnText}>New Trip</Text>
              <MaterialIcons name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.tripBtn}
              onPress={() => navigation.navigate("TripSummary")}
            >
              <Text style={styles.tripBtnText}>Continue Trip</Text>
              <MaterialIcons name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.tripBtn}
              onPress={() => navigation.navigate()}
            >
              <Text style={styles.tripBtnText}>Past Trips</Text>
              <MaterialIcons name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  welcomeMsg: {
    fontSize: 25,
    fontWeight: "bold",
  },

  searchBar: {
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#909090",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  tripBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D3D3D3",
    height: 50,
    width: 300,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
  tripBtnText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
