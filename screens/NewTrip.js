import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { REACT_APP_GOOGLE_API_KEY } from "@env";
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const INITIAL_REGION = {
  latitude: 40.74869,
  longitude: -73.98573,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02 * (width / height),
};

const NewTrip = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_REGION}
          />
        </View>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: REACT_APP_GOOGLE_API_KEY,
            language: "en",
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#909090",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default NewTrip;

{
  /* <View style={styles.searchBar}>
          <MaterialCommunityIcons
            name="map-search"
            size={30}
            style={{ marginRight: 10 }}
          />
          <TextInput placeholder="Search Place" />
        </View> */
}
