import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import InputField from "./InputField";
import { AuthContext } from "../context/AuthContext";

export default function NewTripScreen({ navigation }) {
  const [tripName, setTripName] = useState("");
  const { createTrip } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View style={styles.tripContainer}>
        <View style={styles.tripInput}>
          <Text style={styles.tripText}>Name your trip:</Text>
          <InputField
            label={"Trip Name"}
            value={tripName}
            onChangeText={(text) => setTripName(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.tripNameBtn}
          onPress={() => {
            createTrip(tripName, navigation);
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tripContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  tripText: {
    fontSize: 30,
  },
  tripInput: {
    width: "75%",
  },
  tripNameBtn: {
    backgroundColor: "#5E716A",
    marginTop: 20,
    height: 40,
    width: "35%",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});
